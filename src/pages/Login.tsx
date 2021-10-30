import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonImg, IonLabel, IonButton, IonPopover, IonInput} from '@ionic/react';
import './Login.css';
import React, { useState } from 'react';
import logo from './logo.jpg'
import google from './google.png'
import fingerprint from './fingerprint.png'
import login from './login.png'
import fprint from './FPrint.jpg'
import 'firebase/auth'
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore,collection,doc,addDoc} from '@firebase/firestore/lite';
  import "firebase/firestore";
  

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


  const Login: React.FC = () => {
    // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   var db =getFirestore(app);
  

   const [email,setMail] = useState("");
   const [password,setPassword] = useState("");


   function Login(){
    
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
        <IonInput type="email" placeholder="Email" className="emaill" onIonChange={(e:any)=>setMail(e.target.value)}></IonInput>
        <br></br>
        
        <IonLabel className="LblName">Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="password" onIonChange={(e:any)=>setPassword(e.target.value)}></IonInput>
        <br></br>
        <br></br>
        <IonButton color="blue"  href='./startup' className='LBtn' onClick={()=>Login()}>Login <IonImg src={login} className="svgs"></IonImg></IonButton>
        <br></br>
        <IonButton color="blue" className='LBtn'>Login with Google<IonImg src={google} className="svgs"></IonImg></IonButton>
        <br></br>

        <>
      <IonPopover
        cssClass='popover-content'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonImg src={fprint} className="popup"></IonImg>
      </IonPopover>

        <IonButton onClick={
        (e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
          }} color="blue"
          className='LBtn'>
          Login with fingerprint
          <IonImg src={fingerprint} className="svgs"></IonImg>
        
          </IonButton>
        </>
        

      <p className="NewAccount"> Don't have an account? Click <a href="./signin">here</a> to sign up </p>
        <p className="ForgotPassword">Forgot password?</p>
      </IonContent>

    </IonPage>
  );
};

export default Login;
