import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonImg, IonLabel, IonButton, IonPopover, IonInput} from '@ionic/react';
import './Login.css';
import React, { useState } from 'react'
import google from './google.png'
import login from './login.png'
import WhiteWethu from './WhiteWethu.jpg'

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
     {/*db.collection("Users")
     .where("Email","==",{email})
     .where("Password","==",{password})
     .limit(1)
     .get()
     .then((documents)=>{
       if(documents.empty == true){
         alert("account not found")
       }else{
         alert("Welcome")
       }
     });*/}
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
    
        <IonImg src={WhiteWethu} className="logo2"></IonImg>

        <IonLabel className="LblName">Email:</IonLabel><br></br>
        <IonInput type="email" placeholder="Email" className="emaill" onIonChange={(e:any)=>setMail(e.target.value)}></IonInput>
        <br></br>
        
        <IonLabel className="LblName">Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="password" onIonChange={(e:any)=>setPassword(e.target.value)}></IonInput>
        <br></br>
        <br></br>
        <IonButton color="blue"  href='./startup' className='LBtn' onClick={()=>Login()}>Login <IonImg src={login} className="svgs"></IonImg></IonButton>
        <br></br>
        

      <p className="NewAccount"> Don't have an account? Click <a href="./signin">here</a> to sign up </p>
        <p className="ForgotPassword"> <a href="www.hi.com"> Forgot password?</a></p>
      </IonContent>

    </IonPage>
  );
};

export default Login;
