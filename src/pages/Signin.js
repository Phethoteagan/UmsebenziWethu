import './Login.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover, IonInput,useIonToast, IonToast} from '@ionic/react';
import {useRef} from 'react'
import { auth } from '../firebaseConfig';
import { useHistory } from "react-router-dom";
import WhiteWethu from './WhiteWethu.jpg'



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
  return (
    <IonPage>

      <IonHeader className="FHeader">
          <IonToolbar>
          <IonTitle className="TitleName">Sign-In</IonTitle>
          </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonImg src={WhiteWethu} className="logo3"></IonImg>

      <form className = "form2">
      <IonLabel className="LblName">Email:</IonLabel><br></br>
        <IonInput placeholder="Email" className="emaill" ref={emailRef}></IonInput>
        <br/> <br/> 
        <IonLabel className="LblName">Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Password" className="password"  ref={passwordRef}></IonInput>
        <br/> <br/> 

        <IonLabel className="LblName">Confirm Password:</IonLabel><br></br>
        <IonInput type="password" placeholder="Confirm Password" className="password" ></IonInput>
        <br/> <br/>
        </form>
        <>

        <IonButton color="blue" className="LBtn" onClick={signUp}>Sign-In</IonButton>
        </>

        <p className="link">
          Return to <a href="./login">Login </a> 
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