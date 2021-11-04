import React from 'react';
import { IonCard,IonCardContent, IonCardTitle, IonButton, IonPage } from '@ionic/react';
import { Carousel } from 'react-bootstrap';
import './Login.css'
import WhiteWethu from './WhiteWethu.jpg'


const Slider = () => {
  
  return (
    <IonPage>
    <Carousel fade={true} pause={false}>
       
      <Carousel.Item interval={2000}>

      <img
          className="logo1"
          src={WhiteWethu}
          alt="Logo"
        />
          <IonCard className="card">
            <IonCardTitle className="title">Welcome To Umsebenzi Wethu!</IonCardTitle>
            
            <IonCardContent className="content1">Real Jobs found Here.
            This mobile application is about helping unemployed 
              citizens find jobs that meet most of their skills 
              and qualifications obtained.</IonCardContent>

            </IonCard>
            
      </Carousel.Item>
      <Carousel.Item interval={2000}>

      <img
          className="logo1"
          src={WhiteWethu}
          alt="First slide"
        />
      <IonCard className="card">
            <IonCardTitle className="title">...Umsebenzi Wethu!</IonCardTitle>
            <IonCardContent className="content1">Are you looking for a job? If Yes...Create an account and get yourself one.
            Are you your own boss looking to provide job opportunities
              For unemployed candidates? You already know what to do.</IonCardContent>
            </IonCard>


      </Carousel.Item>

      <Carousel.Item interval={2000}>

      <img
          className="logo1"
          src={WhiteWethu}
          alt="First slide"
        />
      <IonCard className="card">
            <IonCardTitle className="title">...Umsebenzi Wethu!</IonCardTitle>
            <IonCardContent className="content1">Are you looking to gain work experience?... Then this is 
              the right place to gain one. Are you looking for the right candidate for a job? Then this is
              the right place to find yourself one.
            </IonCardContent>
      </IonCard>


      </Carousel.Item>

      <Carousel.Item interval={2000}>
  

      <img
          className="logo1"
          src={WhiteWethu}
          alt="First slide"
        />
      <IonCard className="card">
            <IonCardTitle className="title">...Umsebenzi Wethu!</IonCardTitle>
            <IonCardContent className="content1">Sign up with us. You're only a click away from getting that job
              you are hoping to get.
            </IonCardContent>
            
      </IonCard>

     
      
      </Carousel.Item>
    </Carousel>

    <IonButton color="#5ce1e6" href="./login" className='LBtn'>Skip>>></IonButton>
    </IonPage>
  )
}

export default Slider;