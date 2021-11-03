import './Login.css';
import { IonContent,IonModal, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover, IonInput,useIonToast, IonToast} from '@ionic/react';
import React, { useState } from 'react';
import {useRef} from 'react'
import { auth } from '../firebaseConfig';
import { useHistory } from "react-router-dom";
import {db} from '../firebaseConfig'
import { initializeApp } from "firebase/app";
import { getFirestore,collection,doc,addDoc} from '@firebase/firestore';
import "firebase/firestore";




const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showModal, setShowModal] = useState(true);
  const history = useHistory()

  const signUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        
    ).then(user => {
        console.log(user)
         let path = `./Login`; 
         history.push(path);

    }).catch(err => {
        console.log(err)
        alert(JSON.stringify(err.message));
    })
  }






  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");


  function reg() {

    

    if( password!==confirm){
      alert(" passwords need to match");
      
     }
     else{
       <IonModal isOpen={showModal} className='my-custom-class'>
       <p>Please Finish up the Sign up process:</p>
       <IonButton onClick={() => setShowModal(false)}>Done</IonButton>
       </IonModal>
     }

  }
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
        <IonInput placeholder="Email" className="email" ref={emailRef}></IonInput>
        <br/> <br/> 
        

        <IonLabel>Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="email"  ref={passwordRef}></IonInput>
        <br/> <br/> 

        <IonLabel>Confirm Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Confirm Password" className="email" ></IonInput>
        </form>
        <br/> <br/>

        <IonButton onClick={()=>reg()} ><a onClick={signUp}> Sign-In</a></IonButton>

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