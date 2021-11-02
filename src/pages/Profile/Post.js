import React from "react";
import "./Style.css";

import {
  IonFab,
  IonFabButton,
  IonImg,
  IonGrid,
  IonRow,
  IonItem,
  IonIcon,
  IonInput,
  IonButton,
  IonContent,
  IonPage,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonLabel,
  IonSelectOption,
  IonSelect,
} from "@ionic/react";
import { personOutline, chevronDownOutline } from "ionicons/icons";
import { camera } from "ionicons/icons";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, addDoc } from "@firebase/firestore";
import "firebase/firestore";
// import { ellipsisVerticalSharp } from "ionicons/icons";
import { setDoc } from "@firebase/firestore";
import db from "../../firebaseConfig";

const Post = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [location, setLocation] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const { photo, takePhoto } = usePhotoGallery();
  const fellowshipId = "tp";

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

  function paste() {
    const send = async () => {
      var id = make(20);
      var docData = {
        jobtittle: jobTitle,
        jobdescription: jobDescription,
        jobcategory: jobCategory,
        location: location,
        Requredskills: requiredSkills,
        // photo: photo,
        id: id,
        fellowshipId: fellowshipId,
      };
      await setDoc(doc(db, requiredSkills, id), docData)
        .then((response) => {
          alert("posted post", response);
          /*setPage('3')  pass as props*/
        })
        .catch((error) => {
          console.log("got it");
          alert("error sham", error);
        });
    };
    send();
  }
  // function postInfo() {
  // {addDoc(coll,{
  //     "jobTitle": {jobTitle},
  //     "jobDescription" : {jobDescription},
  //     "jobCategory" : {jobCategory},
  //     "location" : {location},
  //     "requiredSkils":{requiredSkills},
  //   })
  //   alert("You have successfully posted a job");}
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="profile">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/*-- Anchor --*/}
        {/* <IonButton href="#">Anchor</IonButton> */}

        {/*-- Colors --*/}
        <IonButton
          class="applyBtn"
          color="secondary"
          href="./pages/Profile/Apply"
        >
          Apply
        </IonButton>
        <IonButton class="postBtn" color="light">
          Post
        </IonButton>
        <br />
        <IonTitle class="cdTitle">Company Details</IonTitle>
        {/* <img src="https://www.lifeisagarden.co.za/wp-content/uploads/2021/03/LIAG-Web-Banner-Feb-2021-385x426.jpg" alt=""  className="addImgIcon"/> */}

        <IonGrid>
          <IonGrid>
            <IonRow className="addImgIcon">
              {photo && <IonImg src={photo.webviewPath} />}
            </IonRow>
          </IonGrid>
          <IonFab>
            <IonFabButton className="cameraIcon" onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonGrid>

        <IonContent className="camCont">
          <IonRow class="item">
            <IonItem>
              <IonLabel position="floating">Job title </IonLabel>
              <IonInput
                value={jobTitle}
                onIonChange={(e) => setJobTitle(e.target.value)}
              />
            </IonItem>
            <br />
            <IonItem>
              <IonLabel position="floating">Job description</IonLabel>
              <IonInput
                value={jobDescription}
                onIonChange={(e) => setJobDescription(e.target.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Job category</IonLabel>
              <IonInput
                value={jobCategory}
                onIonChange={(e) => setJobCategory(e.target.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Location</IonLabel>
              <IonInput
                value={location}
                onIonChange={(e) => setLocation(e.target.value)}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">Required skills</IonLabel>
              <IonInput
                value={requiredSkills}
                onIonChange={(e) => setRequiredSkills(e.target.value)}
              />
              DROP DOWN 
              */}

              <label for="cars">Choose a trade:</label>
              <IonSelect
                id="cars"
                value={requiredSkills}
                onIonChange={(e) => setRequiredSkills(e.target.value)}
              >
                <IonSelectOption value="Domestic work">Domestic work</IonSelectOption>
                <IonSelectOption value="Gardening">Gardening</IonSelectOption>
                <IonSelectOption value="Plumbing">Plumbing</IonSelectOption>
                <IonSelectOption value="Farming">farming</IonSelectOption>
                <IonSelectOption value="Baby sitting">Baby sitting</IonSelectOption>
                <IonSelectOption value="Construction">Construction</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonRow>
        </IonContent>
        <IonButton onClick={paste}>Post Job</IonButton>
        {/* <IonButton onClick={postInfo}>Post Job</IonButton> */}
        <IonTitle class="title">Applied Jobs</IonTitle>
        <br />

        <IonButton class="jobs" color="success">
          Rejected
        </IonButton>
        <IonButton class="jobs" color="medium">
          Pending
        </IonButton>
        <IonButton class="jobs" color="medium">
          Approved
        </IonButton>
        <br />
        <IonButton class="jobDes" size="large">
          <ul style={{ textAlign: "left" }}>
            <ul
              style={{
                color: "black",
                paddingRight: "10px",
                marginRight: "5px",
              }}
            >
              {" "}
              <IonIcon
                slot="start"
                icon={personOutline}
                style={{ color: "white", paddingRight: "10px" }}
              />
              Mikayla Mcunu
            </ul>
            <ul
              style={{
                color: "black",
                paddingRight: "10px",
                marginRight: "5px",
              }}
            >
              {" "}
              <IonIcon
                slot="start"
                icon={chevronDownOutline}
                style={{ color: "white", paddingRight: "10px" }}
              />
              mmcunu12@gmail.com
            </ul>
          </ul>
          <ul
            style={{ textAlign: "left", marginRight: "105px", color: "black" }}
          >
            <li>Hard Worker</li>
            <li>10 years experience</li>
            <li>Communication skills</li>
          </ul>
        </IonButton>
        <br />

        <IonButton class="jobs" color="medium">
          Rejected
        </IonButton>
        <IonButton class="jobs" color="warning">
          Pending
        </IonButton>
        <IonButton class="jobs" color="medium">
          Approved
        </IonButton>
        <br />
        <IonButton class="jobDes" size="large">
          <ul style={{ textAlign: "left" }}>
            <ul
              style={{
                color: "black",
                paddingRight: "10px",
                marginRight: "5px",
              }}
            >
              {" "}
              <IonIcon
                slot="start"
                icon={personOutline}
                style={{ color: "white", paddingRight: "10px" }}
              />
              Andile Marwala
            </ul>
            <ul
              style={{
                color: "black",
                paddingRight: "10px",
                marginRight: "5px",
              }}
            >
              {" "}
              <IonIcon
                slot="start"
                icon={chevronDownOutline}
                style={{ color: "white", paddingRight: "10px" }}
              />
              amarwala2@gmail.com
            </ul>
          </ul>
          <ul
            style={{ textAlign: "left", marginRight: "105px", color: "black" }}
          >
            <li>Critical Think</li>
            <li>5 years experience</li>
            <li>N4 Plumbing</li>
          </ul>
        </IonButton>
        <br />

        <IonButton class="jobs" color="medium">
          Rejected
        </IonButton>
        <IonButton class="jobs" color="medium">
          Pending
        </IonButton>
        <IonButton class="jobs" color="danger">
          Approved
        </IonButton>
        <br />
        <IonButton class="jobDes" size="large">
          <ul style={{ textAlign: "left" }}>
            <ul
              style={{
                color: "black",
                paddingRight: "10px",
                marginRight: "5px",
              }}
            >
              {" "}
              <IonIcon
                slot="start"
                icon={personOutline}
                style={{ color: "white", paddingRight: "10px" }}
              />
              Mikayla Mcunu
            </ul>
            <ul
              style={{
                color: "black",
                paddingRight: "10px",
                marginRight: "5px",
              }}
            >
              {" "}
              <IonIcon
                slot="start"
                icon={chevronDownOutline}
                style={{ color: "white", paddingRight: "10px" }}
              />
              mmcunu12@gmail.com
            </ul>
          </ul>
          <ul
            style={{ textAlign: "left", marginRight: "105px", color: "black" }}
          >
            <li>Hard Worker</li>
            <li>10 years experience</li>
            <li>Airpot license</li>
          </ul>
        </IonButton>
        <br />
      </IonContent>
    </IonPage>
  );
};

export default Post;
