import './Login.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover, IonInput,useIonToast, IonToast} from '@ionic/react';
import React, { useState } from 'react';
import {useRef} from 'react'
import { auth } from '../firebaseConfig';
import { useHistory } from "react-router-dom";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,doc,addDoc} from '@firebase/firestore';
import "firebase/firestore";
//import { ellipsisVerticalSharp } from 'ionicons/icons';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory()


  const signUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        
    ).then(user => {
        console.log(user)
        let path = `./login`; 
        history.push(path);

    }).catch(err => {
        console.log(err)
        alert(JSON.stringify(err.message));
    })



}











 

  const [email,setMail] = useState("");
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [description,setDescription] = useState("");
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");


  function reg() {

    // const coll=collection(db,"Users");
    
    // if(email.trim()==='' || password.trim()==='' || name.trim()==='' || description.trim()==='' || address.trim()==='' || confirm.trim()===''){
    //  alert("Please fill in all the fields");
     
    // }
    // if( password!==confirm){
    //   alert(" passwords need to match");
      
    // }
    
    // {addDoc(coll,{
    //   "Email": {email},
    //   "Name":{name},
    //   "Address":{address},
    //   "Description":{description},
    //   "Password":{password},
    //   "ConfirmPassword":{confirm}
    // })
    // alert("Your User Registration was successful");}

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
        <IonInput placeholder="Email" className="email" onIonChange={(e)=>setMail(e.target.value)}  ref={emailRef}></IonInput>
        <br/> <br/> 
        
        <IonLabel>Full name:</IonLabel><br></br>
        <IonInput  placeholder="Full name" className="email" onIonChange={(e)=>setName(e.target.value)}></IonInput>
        <br/> <br/> 

        <IonLabel>Address:</IonLabel><br></br>
        <IonInput  placeholder="Address" className="email" onIonChange={(e)=>setAddress(e.target.value)}></IonInput>
        <br/> <br/>
        
        <IonLabel>Description/Skills:</IonLabel><br></br>
        <IonInput placeholder="Description/Skills" className="skills" onIonChange={(e)=>setDescription(e.target.value)}></IonInput>
        <br/> <br/> 

        <IonLabel>Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="email" onIonChange={(e)=>setPassword(e.target.value)} ref={passwordRef}></IonInput>
        <br/> <br/> 

        <IonLabel>Confirm Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Confirm Password" className="email" onIonChange={(e)=>setConfirm(e.target.value)}></IonInput>
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

        <IonButton onClick={()=>reg()}  ><a onClick={signUp}>Sign-In</a></IonButton>
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