import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonImg, IonLabel, IonButton, IonPopover, IonInput} from '@ionic/react';
import './Login.css';
import  {useRef} from 'react'
import { auth } from '../firebaseConfig';
import { useHistory } from "react-router-dom";



import { useState } from 'react';
import logo from './logo.jpg'
import google from './google.png'
import fingerprint from './fingerprint.png'
import login from './login.png'
import fprint from './FPrint.jpg'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";
  //import { getFirestore,collection,doc,addDoc} from '@firebase/firestore/lite';
  import "firebase/firestore";
  
  

  


  const Login = () => {
    
  






   const emailRef = useRef(null);
   const passwordRef = useRef(null);
   const history = useHistory()
  
   

   const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then(user => {
      
        console.log(user)
        alert(JSON.stringify('Login Successful'));
        let path = `./pages/Startup`; 
        history.push(path);
        
    }).catch(err => {
        console.log(err)
        alert(JSON.stringify(err.message));
    })
}




  

  
   const [popoverState, setShowPopover] = 
  useState({ showPopover: false, event: undefined });
  return (
    <IonPage>
      <IonHeader className='FHeader'>
        <IonToolbar>
          <IonTitle className="TitleName">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ContentBlock'>
    
        <IonImg src={logo} className="logo2"></IonImg>

        <IonLabel className="LblName">Email:</IonLabel><br></br>
        <IonInput type="email" placeholder="Email" className="emaill" ref={emailRef}></IonInput>
        <br></br>
        
        <IonLabel className="LblName">Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="password" ref={passwordRef} ></IonInput>
        <br></br>
        <br></br>
        <IonButton color="blue" onClick={signIn}  className='LBtn' >Login <IonImg src={login} className="svgs" ></IonImg></IonButton>
        <br></br>
        <IonButton color="blue" className='LBtn' >Login with Google<IonImg src={google} className="svgs"></IonImg></IonButton>
        <br></br>

       
      <p className="NewAccount"> Don't have an account? Click <a href="./signin">here</a> to sign up </p>
        <p className="ForgotPassword">Forgot password?</p>
      </IonContent>

    </IonPage>
  );
};

export default Login;
