import React, {useState}from 'react';
import "./Style.css";
import { IonImg ,IonIcon,IonFab,IonGrid,IonFabButton,IonRow,IonLabel,IonItem,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import Database from '../Database.js'


import { collection,addDoc} from '@firebase/firestore';
import {db} from "../../firebaseConfig"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const Apply= () => {

    const { photo, takePhoto} = usePhotoGallery();

  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [skills,setSkills] = useState("");
  const [address,setAddress] = useState("");

 function reg() {

    var coll=collection(db,"Users");
    
    if( name.trim()==='' || skills.trim()==='' || address.trim()==='' || surname.trim()===''){
     alert("Please fill in all the fields");
     
    }
    
    {addDoc(coll,{
      "Name":{name},
      "Address":{address},
      "Skills":{skills},
      "Surname":{surname}
    })
    alert("Your User Registration was successful");}


    
  }

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar className="apply-toolbar">
                {/* VERY IMPORTANT BUTTON */}
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent className="apply-page">
            {/*-- Anchor --*/}
            {/* <IonButton href="#">Anchor</IonButton> */}

            {/*-- Colors --*/}
            
            <IonTitle class="cdTitle" >User Details</IonTitle>

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
                    <IonLabel position= "floating">User Name </IonLabel>
                    <IonInput onIonChange={(e)=>setName(e.target.value)} ></IonInput>
                </IonItem><br/>
                <IonItem>
                    
                    <IonLabel position= "floating">Surname</IonLabel>
                    <IonInput onIonChange={(e)=>setSurname(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position= "floating">Skills </IonLabel>
                    <IonInput onIonChange={(e)=>setSkills(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position= "floating">Address </IonLabel>
                    <IonInput onIonChange={(e)=>setAddress(e.target.value)}></IonInput>
                </IonItem>
            </IonRow>
            <IonButton onClick={()=>reg()}>Update Profile</IonButton>
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

export default Apply