import './Login.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover, IonInput,useIonToast, IonToast} from '@ionic/react';
import React, { useState } from 'react';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,doc,addDoc} from '@firebase/firestore/lite';
import "firebase/firestore";
import { ellipsisVerticalSharp } from 'ionicons/icons';
import {toast} from './toast'
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



const Signin: React.FC = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  var db =getFirestore(app);

  const [email,setMail] = useState("");
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [description,setDescription] = useState("");
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");


  function reg() {

    var coll=collection(db,"Users");
    
    if(email.trim()==='' || password.trim()==='' || name.trim()==='' || description.trim()==='' || address.trim()==='' || confirm.trim()===''){
     toast("Please fill in all the fields");
     
    }
    if( password!==confirm){
      toast(" passwords need to match");
      
    }
    
    {addDoc(coll,{
      "Email": {email},
      "Name":{name},
      "Address":{address},
      "Description":{description},
      "Password":{password},
      "ConfirmPassword":{confirm}
    })
    toast("Your User Registration was successful");}

  }

  const [thankyouState, setThankyou] = 
  useState({ ThankYou: false, event: undefined });
  return (
    <IonPage>

      <IonHeader>
          <IonToolbar>
          <IonTitle>Sign-In</IonTitle>
          </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

      <IonImg src="../assets/logo.jpg" className="logo"></IonImg>
      < form className = "form">
      <IonLabel>Email:</IonLabel><br></br>
        <IonInput placeholder="Email" className="email" onIonChange={(e:any)=>setMail(e.target.value)}></IonInput>
        <br/> <br/> 
        
        <IonLabel>Full name:</IonLabel><br></br>
        <IonInput  placeholder="Full name" className="email" onIonChange={(e:any)=>setName(e.target.value)}></IonInput>
        <br/> <br/> 

        <IonLabel>Address:</IonLabel><br></br>
        <IonInput  placeholder="Address" className="email" onIonChange={(e:any)=>setAddress(e.target.value)}></IonInput>
        <br/> <br/>
        
        <IonLabel>Description/Skills:</IonLabel><br></br>
        <IonInput placeholder="Description/Skills" className="skills" onIonChange={(e:any)=>setDescription(e.target.value)}></IonInput>
        <br/> <br/> 

        <IonLabel>Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="email" onIonChange={(e:any)=>setPassword(e.target.value)}></IonInput>
        <br/> <br/> 

        <IonLabel>Confirm Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Confirm Password" className="email" onIonChange={(e:any)=>setConfirm(e.target.value)}></IonInput>
        </form>
        <br/> <br/>

        <>
        <IonPopover
        cssClass='feedback'
        event={thankyouState.event}
        isOpen={thankyouState.ThankYou}
        onDidDismiss={() => setThankyou({ ThankYou: false, event: undefined })}
        >
        <p>You have registered successfully</p>
        </IonPopover>

        <IonButton onClick={()=>reg()}>Sign-In</IonButton>
        </>

        <p className="link">
          Click <a href="./login">here</a> to return to the Login page
        </p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      
      </IonContent>

    </IonPage>
  );
};

export default Signin;