import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonImg, IonLabel, IonButton, IonPopover, IonInput} from '@ionic/react';
  import './Login.css';
  import  {useRef} from 'react'
  import { auth } from '../firebaseConfig';
  import { useHistory } from "react-router-dom";
  import { Redirect, Route } from 'react-router-dom';
  
  import { IonReactRouter } from '@ionic/react-router';
  
  import { useState } from 'react';
  import google from './google.png'
  import login from './login.png'
  
  import WhiteWethu from './WhiteWethu.jpg'
  
  import fprint from './FPrint.jpg'
  import UserProfile from './userSession';
  
  
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";
    //import { getFirestore,collection,doc,addDoc} from '@firebase/firestore/lite';
    import "firebase/firestore";
    import React, { Component } from 'react';
  
  
    class Login extends Component {
      state = { email: '', password: '' };
    
      handleChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({ [name]: value });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
          try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log(email)
            UserProfile.setName(email);
            let path = "./pages/Home/Startup";
            window.location.replace(path);
          } catch (error) {
            console.log('error logging in', error);
          }
        }
    
        // this.setState({ email: '', password: '' });
      };
    
      render() {
        function reset() {
          //const userEmail = collection(db,"users")
          //const { email} = this.state;
    
          auth.sendPasswordResetEmail(email)
          .then(()=>{
            alert("password reset email sent")
          })
          .catch(error=>{
            alert(error.message)
          })
        }
        const { email, password } = this.state;
        return (
          <IonPage>
        <IonHeader className='FHeader'>
          <IonToolbar>
            <IonTitle className="TitleName">Login</IonTitle>
          </IonToolbar>
         </IonHeader>
         <IonContent fullscreen className='ContentBlock'>
      
          <IonImg src={WhiteWethu} className="logo2"></IonImg>
            <form className="form1" >
              <IonLabel className="LblName">Username/Email:</IonLabel><br></br>
              <IonInput
                type="email"
                name="email"
                value={email}
                onIonChange={this.handleChange}
                // placeholder="Email"
                className="inputs"
              />
              <IonLabel className="LblName">Password:</IonLabel><br></br>
              <IonInput
                type="password"
                name="password"
                value={password}
                onIonChange={this.handleChange}
                // placeholder="Password"
                className="inputs"
              />
            </form>
            <IonButton onClick={this.handleSubmit} color="blue" className="LBtn">Login</IonButton>
           <p className="NewAccount"> Don't have an account? Click <a href="./signin">here</a> to sign up </p>
           <button className="ForgotPassword" style ={{marginLeft:"30%"}} onClick={reset}>Forgot password?</button>
  
        
         </IonContent>
  
       </IonPage>
        );
      }
    }
    
    export default Login;
    
  //   const Login = () => {
      
  
  //    const emailRef = useRef(null);
  //    const passwordRef = useRef(null);
  //    const history = useHistory()
    
  
  //    const signIn = e => {
  //     e.preventDefault();
  //     auth.signInWithEmailAndPassword(
  //         emailRef.current.value,
  //         passwordRef.current.value
  //     ).then(user => {
  //         // console.log(emailRef.current.value)
  //         // alert(JSON.stringify('Login Successful'));
  //         UserProfile.setName(emailRef.current.value);
  //         // let path = "./pages/Home/Startup"; 
  //         history.push("./pages/Home/Startup");
  //         window.location.reload();
          
  //     }).catch(err => {
  //         console.log(err)
  //         alert(JSON.stringify(err.message));
  //     })
  // }
  
  
  
  
    
  
    
  //    const [popoverState, setShowPopover] = 
  //   useState({ showPopover: false, event: undefined });
  //   return (
  //     <IonPage>
  //       <IonHeader className='FHeader'>
  //         <IonToolbar>
  //           <IonTitle className="TitleName">Login</IonTitle>
  //         </IonToolbar>
  //       </IonHeader>
  //       <IonContent fullscreen className='ContentBlock'>
      
  //         <IonImg src={WhiteWethu} className="logo2"></IonImg>
  
  //         <form className="form1">
  //         <IonLabel className="LblName">Username/Email:</IonLabel><br></br>
  //         <IonInput type="email" placeholder="Email" className="emaill" ref={emailRef}></IonInput>
  //         <br></br>
          
  //         <IonLabel className="LblName">Password:</IonLabel><br></br>
  //         <IonInput type="password" placeholder="Password" className="password" ref={passwordRef} ></IonInput>
  //         <br></br>
  //         </form>
  
  //         <IonButton color="blue" onClick={signIn}  className="LBtn" >Login <IonImg src={login} className="svgs" ></IonImg></IonButton>
  //         <br></br>
  //         <IonButton color="blue" className='button-Google' >Login with Google<IonImg src={google} className="svgs"></IonImg></IonButton>
  //         <br></br>
  
         
  //       <p className="NewAccount"> Don't have an account? Click <a href="./signin">here</a> to sign up </p>
  //         <p className="ForgotPassword">Forgot password?</p>
  
        
  //       </IonContent>
  
  //     </IonPage>
  //   );
  // };
  
  // export default Login;
  