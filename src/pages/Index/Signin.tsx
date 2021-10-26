import './Login.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover} from '@ionic/react';
import React, { useState } from 'react';

const Signin: React.FC = () => {
  const [thankyouState, setThankyou] = 
  useState({ ThankYou: false, event: undefined });
  return (
    <IonPage>

      <IonHeader>
          <IonToolbar>
          <IonTitle>Signin</IonTitle>
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

        <IonLabel>Confirm Password:</IonLabel><br></br>
        <input type="password" placeholder="Confirm Password" className="Cpassword"></input>
        <br></br>
        <br></br>

        <>
        <IonPopover
        cssClass='feedback'
        event={thankyouState.event}
        isOpen={thankyouState.ThankYou}
        onDidDismiss={() => setThankyou({ ThankYou: false, event: undefined })}
        >
        <p>You have registered successfully</p>
        </IonPopover>

        <IonButton onClick={
        (e: any) => {
          e.persist();
          setThankyou({ ThankYou: true, event: e })
        }}color="blue">
          Signin
          </IonButton>
        </>

        <p className="link">
          Click <a href="./login">here</a> to return to the Login page
        </p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        (NOT SURE HOW TO THE GETTING THE FINGERPRINT GOES, SHOULD BE ON THE ACCOUNT)
      
      </IonContent>

    </IonPage>
  );
};

export default Signin;