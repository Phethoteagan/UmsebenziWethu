import { IonCardContent, IonContent, IonPage, IonSlide, IonSlides,  
  IonCard, IonCardTitle, IonButton, IonImg} from '@ionic/react';
import React from 'react';

const slide_options={
  initialSlide: 0,
  speed:400,
};



const Slider: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent>
      <IonImg src="../assets/logo.jpg" className="logo"></IonImg>
        <IonSlides options={slide_options} >
          
          <IonSlide>
            <IonCard className="card">
            <IonCardTitle className="title">Welcome To Umsebenzi Wethu!</IonCardTitle>
            
            <IonCardContent className="content">Real Jobs found Here</IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
            <IonCardContent className="content">This mobile application is about helping unemployed 
              citizens find jobs that meet most of their skills 
              and qualifications obtained.
            </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
            <IonCardContent className="content">Are you looking for a job? If Yes...Create an account and get yourself one.</IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
            <IonCardContent className="content">Are you your own boss looking to provide job opportunities
              For unemployed candidates? You already know what to do.
            </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
            <IonCardContent className="content">Are you looking to gain work experience?... Then this is 
              the right place to gain one.
            </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
            <IonCardContent className="content">Are you looking for the right candidate for a job? Then this is
              the right place to find yourself one.
            </IonCardContent>
            </IonCard>
          </IonSlide>
          
          <IonSlide>
            <IonCard className="card">
            <IonCardContent className="content">Sign up with us. You're only a click away from getting that job
              you are hoping to get.
            </IonCardContent>
            </IonCard>
          </IonSlide>
          

        </IonSlides>

        <IonButton color="#5ce1e6" href="./login">Skip</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Slider;
