import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
IonImg, IonLabel, IonButton, IonPopover} from '@ionic/react';
import './Login.css';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [popoverState, setShowPopover] = 
  useState({ showPopover: false, event: undefined });
  return (
    
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
      
        <IonImg src="../assets/logo.jpg" className="logo"></IonImg>

        <IonLabel>Email:</IonLabel><br></br>
        <input type="email" placeholder="Email" className="email"></input>
        <br></br>
        
        <IonLabel>Password:</IonLabel><br></br>
        <input type="password" placeholder="Password" className="password"></input>
        <br></br>
        <br></br>
        <IonButton color="blue">Login <IonImg src="../assets/login.png" className="svgs"></IonImg></IonButton>
        <br></br>
        <IonButton color="blue">Login with Google<IonImg src="../assets/google.png" className="svgs"></IonImg></IonButton>
        <br></br>

        <>
      <IonPopover
        cssClass='popover-content'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonImg src="../assets/FPrint.jpg" className="popup"></IonImg>
      </IonPopover>

        <IonButton 
        href={"./Menu"}
        onClick={
        (e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
        }} color="blue">
          Login with fingerprint
          <IonImg src="../assets/fingerprint.png" className="svgs"></IonImg>
          </IonButton>
        </>
        

      <p className="NewAccount"> Don't have an account? Click <a href="./signin">here</a> to sign up </p>
        <p className="ForgotPassword">Forgot password?</p>
      </IonContent>

    </IonPage>
  );
};

export default Login;
