import React from 'react';
import "./Style.css";
import { IonImg ,IonIcon,IonFab,IonGrid,IonFabButton,
    IonRow,IonLabel,IonItem,IonInput,IonButton, IonContent, 
    IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import Database from '../Database.js'

<<<<<<< HEAD:src/pages/Profile/Apply.tsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,doc,addDoc} from '@firebase/firestore/lite';
import "firebase/firestore";
import { ellipsisVerticalSharp } from 'ionicons/icons';
import Details from './details';
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

const Apply: React.FC = () => {
=======
const Apply = () => {
>>>>>>> 9c0a43e54871647bf649fb87823c9df6d3b29f5d:src/pages/Profile/Apply.js
    const { photo, takePhoto} = usePhotoGallery();
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    var db =getFirestore(app);
  
    return (
    
    <IonPage>
        <IonHeader>
            <IonToolbar>
                {/* VERY IMPORTANT BUTTON */}
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent >
            {/*-- Anchor --*/}
            {/* <IonButton href="#">Anchor</IonButton> */}

            {/*-- Colors --*/}
            <IonButton class="applyBtn" color="light">Apply</IonButton>
            <IonButton class="postBtn" color="secondary" href="./pages/Profile/Post">Post</IonButton><br/>
            <IonTitle class="cdTitle" >User Details</IonTitle>
            <Details/>  

            {/* <img src="https://static.vecteezy.com/system/resources/previews/002/002/247/non_2x/beautiful-black-woman-avatar-character-icon-free-vector.jpg" alt="" className="addImgIcon"/> */}

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

            <IonContent >
            <IonRow class="item" >
                <IonItem>
                    <IonLabel position= "floating">User Name </IonLabel><IonInput/>
                </IonItem><br/>
                <IonItem>
                    <IonLabel position= "floating">Surname</IonLabel><IonInput/>
                </IonItem>
                <IonItem>
                    <IonLabel position= "floating">Skills </IonLabel><IonInput/>
                </IonItem>
                <IonItem>
                    <IonLabel position= "floating">Address </IonLabel><IonInput/>
                </IonItem>
            </IonRow>

            <IonTitle class="title">Applied Jobs</IonTitle><br/>

            <IonButton class="jobs" color="success">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">Plumbing</IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="warning">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">Database Admin</IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="danger">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">Drone Admin</IonButton><br/>
            </IonContent>
            
        </IonContent>
    </IonPage>
    )
    };

export default Apply;