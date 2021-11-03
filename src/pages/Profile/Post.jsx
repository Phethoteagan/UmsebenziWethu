import React from 'react';
import "./Style.css"
import {IonFab,IonFabButton,IonImg ,IonGrid,IonRow,IonItem,IonIcon,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar, IonLabel } from '@ionic/react';
import {  personOutline, chevronDownOutline} from 'ionicons/icons';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { useState } from 'react';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,doc,addDoc} from '@firebase/firestore';
import { ellipsisVerticalSharp } from 'ionicons/icons';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ENwMbXXjHvzTFdkxSD0izmj8CVffol0",
  authDomain: "white-guy.firebaseapp.com",
  databaseURL: "https://white-guy-default-rtdb.firebaseio.com",
  projectId: "white-guy",
  storageBucket: "white-guy.appspot.com",
  messagingSenderId: "947399937368",
  appId: "1:947399937368:web:c9422f04ceb51c1a02692d",
  measurementId: "G-NJTYHST03S"
};

const Post = () => {
    const { photo, takePhoto} = usePhotoGallery();

    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    var db =getFirestore(app);

    var coll=collection(db,"Company");


        const [jobTitle, setJobTitle] = useState("");
        const [jobDescription, setJobDescription] = useState("");
        const [jobCategory, setJobCategory] = useState("");
        const [location, setLocation] = useState("");
        const [requiredSkills, setRequiredSkills] = useState("");
        // const { photo, takePhoto} = usePhotoGallery();

        function postInfo() {
        {addDoc(coll,{
            "jobTitle": {jobTitle},
            "jobDescription" : {jobDescription},
            "jobCategory" : {jobCategory},
            "location" : {location},
            "requiredSkils":{requiredSkills},
          })
          alert("You have successfully posted a job");}
        }
      
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent>
            {/*-- Anchor --*/}
            {/* <IonButton href="#">Anchor</IonButton> */}

            {/*-- Colors --*/}
            <IonButton class="applyBtn" color="secondary" href="./pages/Profile/Apply">Apply</IonButton>
            <IonButton class="postBtn" color="light" >Post</IonButton><br/>
            <IonTitle class="cdTitle">Company Details</IonTitle>
            {/* <img src="https://www.lifeisagarden.co.za/wp-content/uploads/2021/03/LIAG-Web-Banner-Feb-2021-385x426.jpg" alt=""  className="addImgIcon"/> */}
    
                <IonGrid>
                    <IonGrid>
                        <IonRow className="addImgIcon">
                        {photo && <IonImg  src={photo.webviewPath } />}
                        </IonRow>
                    </IonGrid>
                    <IonFab >
                    <IonFabButton className="cameraIcon" onClick={() => takePhoto()}>
                        <IonIcon  icon={camera}></IonIcon>
                    </IonFabButton>
                    </IonFab>
                </IonGrid>

            <IonContent className="camCont">
                    <IonItem>
                        <IonLabel position= "floating">User Name </IonLabel><IonInput/>
                        <IonLabel position= "floating">Job title </IonLabel>
                        <IonInput value={jobTitle}
                        onIonChange={e => setJobTitle(e.detail.value)}/>
                    </IonItem><br/>
                    <IonItem>
                        <IonLabel position= "floating">Surname</IonLabel><IonInput/>
                        <IonLabel position= "floating">Job description</IonLabel>
                        <IonInput value={jobDescription}
                        onIonChange={e => setJobDescription(e.detail.value)}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position= "floating">Job category</IonLabel>
                        <IonInput value={jobCategory}
                        onIonChange={e => setJobCategory(e.detail.value)}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position= "floating">Skills </IonLabel><IonInput/>
                        <IonLabel position= "floating">Location</IonLabel>
                        <IonInput value={location}
                        onIonChange={e => setLocation(e.detail.value)}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position= "floating">Address </IonLabel><IonInput/>
                        <IonLabel position= "floating">Required skills</IonLabel>
                        <IonInput value={requiredSkills} 
                        onIonChange={e => setRequiredSkills(e.detail.value)}/>
                    </IonItem>

            </IonContent>
            <IonButton onClick={postInfo}>Post Job</IonButton>
            <IonTitle class="title">Applied Jobs</IonTitle><br/>

            <IonButton class="jobs" color="success">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">
            <ul style={{textAlign:"left"}}>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />Mikayla Mcunu</ul>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />mmcunu12@gmail.com</ul>
            </ul>
                <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                    <li >Hard Worker</li>
                    <li>10 years experience</li>
                    <li>Communication skills</li>
                </ul>
            </IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="warning">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">
            <ul style={{textAlign:"left"}}>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />Andile Marwala</ul>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />amarwala2@gmail.com</ul>
            </ul>
                <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                    <li >Critical Think</li>
                    <li>5 years experience</li>
                    <li>N4 Plumbing</li>
            </ul>
            </IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="danger">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">
            <ul style={{textAlign:"left"}}>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />Mikayla Mcunu</ul>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />mmcunu12@gmail.com</ul>
            </ul>
                <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                    <li >Hard Worker</li>
                    <li>10 years experience</li>
                    <li>Airpot license</li>
            </ul>
            </IonButton><br/>

        </IonContent>
    </IonPage>
    );
};

export default Post