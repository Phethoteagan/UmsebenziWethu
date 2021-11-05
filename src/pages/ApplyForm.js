import "./Profile/Style.css";
import {
  IonImg,
  IonIcon,
  IonFab,
  IonGrid,
  IonFabButton,
  IonRow,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonContent,
  IonPage,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import Database from "./Database.js";
import UserProfile from "./userSession";
import { useState, useEffect } from "react";
// import { auth } from "../../firebaseConfig";
// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, addDoc } from "@firebase/firestore";
import "firebase/firestore";
// import { ellipsisVerticalSharp } from "ionicons/icons";
import { setDoc, query, where, getDocs, getDoc } from "@firebase/firestore";
import db from "../firebaseConfig";
import { useParams } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [skills, setSkills] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const jobId = useParams();
  const userEmail = UserProfile.getName;
  const [adminEmail, setAdminEmail] = useState();

  function make(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(async () => {
    // get job employer details
    const docRef = doc(db, "post", jobId.jobId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setAdminEmail(docSnap.data().adminEmail);
      console.log("Document data:", docSnap.data());
      // alert("admin data found")
    } else {
      // doc.data() will be undefined in this case
      alert("No such document!");
    }
  }, []);

  function paste(e) {
    e.preventDefault();
    const send = async () => {
      var id = make(20);
      var docData = {
        name: name,
        surname: surname,
        status: "pending",
        email: UserProfile.getName(), //current logged user
        contactDetails: number, //current logged user
        address: address, //form
        gender: "male",
        jobId: jobId.jobId,
        adminEmail: adminEmail,
      };
      await setDoc(doc(db, "appliedJobs", id), docData)
        .then((response) => {
          alert("successfully applied for job", response);
        //   window.location.replace('/pages/Home/Default')
          /*setPage('3')  pass as props*/
        })
        .catch((error) => {
          console.log("got it");
          alert("error sham", error);
        });
    };
    send();
  }

  return (
    <>
      <h1>Job application form</h1>
      <IonRow class="item">
        <form action="">
          <IonItem>
            <IonLabel position="floating">User Name </IonLabel>
            <IonInput
              onIonChange={(e) => setName(e.target.value)}
              required
            ></IonInput>
          </IonItem>
          <br />
          <IonItem>
            <IonLabel position="floating">Surname</IonLabel>
            <IonInput
              onIonChange={(e) => setSurname(e.target.value)}
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Phone number </IonLabel>
            <IonInput
              onIonChange={(e) => setNumber(e.target.value)}
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Address </IonLabel>
            <IonInput
              onIonChange={(e) => setAddress(e.target.value)}
              required
            ></IonInput>
          </IonItem>
          <IonButton
            onClick={(e) => {
              paste(e);
            }}
            type="submit"
          >
            Submit application
          </IonButton>
        </form>
      </IonRow>
    </>
  );
};

export default Form;
