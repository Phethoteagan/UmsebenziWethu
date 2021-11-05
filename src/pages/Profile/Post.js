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
import { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, addDoc } from "@firebase/firestore";
import "firebase/firestore";
// import { ellipsisVerticalSharp } from "ionicons/icons";
import { setDoc, query, where, getDocs, getDoc } from "@firebase/firestore";
import db from "../../firebaseConfig";
import UserProfile from "../userSession";
import DisplayJobs from "./displayJobs";

const Post = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const { photo, takePhoto } = usePhotoGallery();
  // current logged user email
  const userEmail = UserProfile.getName();
  // current logged user posted jobs
  const [jobs, setJobs] = useState([]);
  // specific job user data
  const [userData, setUserData] = useState("");
  var dummy = "";

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
        jobtitle: jobTitle,
        jobdescription: jobDescription,
        jobcategory: jobCategory,
        location: location,
        category: category,
        // photo: photo,
        id: id,
        adminEmail: userEmail,
        appliedUsers: [],
      };
      await setDoc(doc(db, "post", id), docData)
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

  useEffect(async () => {
    var foundDiscussions = [];
    const dbQuery = query(
      collection(db, "appliedJobs"),
      where("adminEmail", "==", userEmail)
    );
    const queryResults = await getDocs(dbQuery);

    queryResults.forEach((dis) => {
      var data = dis.data();
      data["id"] = dis.id;
      foundDiscussions.push(data);
    });
    setJobs(foundDiscussions);
  }, []);

  async function updateStatus(jobId, status){
    console.log("passed id:", jobId)
    const cityRef = db.collection('appliedJobs').doc(jobId);

    // Set the 'capital' field of the city
    const res = await cityRef.update({status: status})
    .then((response) => {
      alert("status updated")
    })
    .catch((err) => {
      alert("err occured:",err.message)
      console.log("error:", err)
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="post-toolbar">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="profile">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="post-form-page">
        {/*-- Anchor --*/}
        {/* <IonButton href="#">Anchor</IonButton> */}

        {/*-- Colors --*/}
       
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
            {/* <IonItem>
              <IonLabel position="floating">Job category</IonLabel>
              <IonInput
                value={jobCategory}
                onIonChange={(e) => setJobCategory(e.target.value)}
              />
            </IonItem> */}
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

              <label for="job">Choose the Job Category:</label>
              <IonSelect
                id="id"
                value={category}
                onIonChange={(e) => setCategory(e.target.value)}
              >
                <IonSelectOption value="domestic work">
                  Domestic work
                </IonSelectOption>
                <IonSelectOption value="gardening">Gardening</IonSelectOption>
                <IonSelectOption value="plumbing">Plumbing</IonSelectOption>
                <IonSelectOption value="farming">farming</IonSelectOption>
                <IonSelectOption value="babysitting">
                  Baby sitting
                </IonSelectOption>
                <IonSelectOption value="construction">
                  Construction
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonRow>
        </IonContent>
        <IonButton className=" postjob" onClick={paste}>
          Post Job
        </IonButton>
        {/* <IonButton onClick={postInfo}>Post Job</IonButton> */}
        <IonTitle class="title">Applicants History</IonTitle>
        <br />
        {
          jobs.map((job) => {
            return(
              <>
                <div>
                  <div style={{display:'flex', justifyContent:"space-between"}}>
                    <IonButton class="jobs" style={{margin:"0px"}} color={job.status == 'rejected'?"danger":""} onClick={() => updateStatus(job.id, 'rejected')}>Rejected</IonButton>
                    <IonButton class="jobs" style={{margin:"0px"}}  color={job.status == 'pending'?"warning":""} onClick={() => updateStatus(job.id, 'pending')}>Pending</IonButton>
                    <IonButton class="jobs" style={{margin:"0px"}}  color={job.status == 'approved'?"success":""} onClick={() => updateStatus(job.id, 'approved')}>Approved</IonButton>
                  </div>
                  <IonButton class="jobDes" style={{margin:"0px"}}  size="large">
                  <ul style={{textAlign:"left"}}>
                          <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />{job.name}</ul>
                          <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />{job.email}</ul>
                          <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />{job.title}</ul>
                  </ul>
                  </IonButton><br/>
                </div>
              </>
            )
          })
        }
    
      </IonContent>
    </IonPage>
  );
};

export default Post;
