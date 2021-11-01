import './Login.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover, IonInput,useIonToast, IonToast} from '@ionic/react';
import {useRef} from 'react'
import { auth } from '../firebaseConfig';
import { useHistory } from "react-router-dom";
import logo from './logo.jpg'



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

      <IonHeader>
          <IonToolbar>
          <IonTitle>Sign-In</IonTitle>
          </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonImg src={logo} className="logo"></IonImg>
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

        <>

        <IonButton  onClick={signUp}>Sign-In</IonButton>
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