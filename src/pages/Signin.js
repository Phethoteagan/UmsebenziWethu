import './Login.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonImg, IonLabel, IonButton, IonPopover, IonInput,useIonToast, IonToast} from '@ionic/react';
import {useRef} from 'react'
import { auth, createUserDocument } from '../firebaseConfig';
import { useHistory } from "react-router-dom";
import WhiteWethu from './WhiteWethu.jpg'
import React, { Component } from 'react';

class Signin extends Component {
  state = { displayName: '',surname: '',phoneNumber: '',dateOfBirth: '', email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password,  displayName,surname,phoneNumber,dateOfBirth } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, {displayName,surname,phoneNumber,dateOfBirth });

    } catch (error) {
      alert(JSON.stringify(error.message));
    }

    this.setState({ displayName: '',surname: '',phoneNumber: '',dateOfBirth: '', email: '', password: '',confirmPassword: '' });
  };

  render() {
    const { displayName,surname,phoneNumber,dateOfBirth, email, password, confirmPassword } = this.state;
    return (
      <IonPage>
       <IonHeader className="FHeader">
           <IonToolbar>
           <IonTitle className="TitleName">Sign-In</IonTitle>
           </IonToolbar>
       </IonHeader>
       <IonContent fullscreen>
       <IonImg src={WhiteWethu} className="logo3"></IonImg>
        <form className = "form2" >
          <IonLabel className="LblName">UserName:</IonLabel><br></br>
          <input
            type="displayName"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            // placeholder="Name"
            className="emaill"
          />
          <IonLabel className="LblName">Surname:</IonLabel><br></br>
          <input
            type="displayName"
            name="surname"
            value={surname}
            onChange={this.handleChange}
            // placeholder="Name"
            className="emaill"
          />
          <IonLabel className="LblName">Date of Birth:</IonLabel><br></br>
          <input
            type="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={this.handleChange}
            // placeholder="Name"
            className="emaill"
          />
          <IonLabel className="LblName">Contact Details:</IonLabel><br></br>
          <input
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
            // placeholder="Name"
            className="emaill"
          />
          <IonLabel className="LblName">Email:</IonLabel><br></br>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            // placeholder="Email"
            className="emaill"
          />
          <IonLabel className="LblName">Password:</IonLabel><br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            // placeholder="Password"
            className="password"
          />
          <IonLabel className="LblName">Confirm Password:</IonLabel><br></br>
          <input
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            // placeholder="Password"
            className="password"
          />

        </form>
        <IonButton  onClick={this.handleSubmit}  className="LBtn">Signup</IonButton>
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
  }
}

export default Signin;

// const Signin = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const displayNameRef = useRef(null);
//   const history = useHistory()


//   const signUp = e => {
//     e.preventDefault();
//     auth.createUserWithEmailAndPassword(
//         emailRef.current.value,
//         passwordRef.current.value,
//         displayNameRef.current.value,
        
//     ).then(user => {
//         console.log(user);
//         createUserDocument(user, {displayNameRef})
        // let path = `./login`; 
        // history.push(path);

//     }).catch(err => {
//         console.log(err)
//         alert(JSON.stringify(err.message));
//     })
//   }
//   return (
//     <IonPage>

//       <IonHeader className="FHeader">
//           <IonToolbar>
//           <IonTitle className="TitleName">Sign-In</IonTitle>
//           </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>
//       <IonImg src={WhiteWethu} className="logo3"></IonImg>

//       <form className = "form2">
//       <IonLabel className="LblName">Email:</IonLabel><br></br>
//         <IonInput placeholder="Email" className="emaill" ref={emailRef}></IonInput>
//         <br/> <br/> 
//         <IonLabel className="LblName">Password:</IonLabel><br></br>
//         <IonInput type="password" placeholder="Password" className="password"  ref={passwordRef}></IonInput>
//         <br/> <br/> 

//         <IonLabel className="LblName">User Name </IonLabel><br></br>
//         <IonInput type="text" placeholder="Confirm Password" className="password" ref={displayNameRef}></IonInput>
//         <br/> <br/>
//         </form>
//         <>

//         <IonButton color="blue" className="LBtn" onClick={signUp}>Sign-In</IonButton>
//         </>

//         <p className="link">
//           Return to <a href="./login">Login </a> 
//         </p>

//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
        
      
//       </IonContent>

//     </IonPage>
//   );
// };

// export default Signin;