import {  IonMenuButton,IonButtons, IonHeader, IonTitle,
  IonContent, IonPage, IonImg, IonLabel, IonToolbar } from '@ionic/react';
import { mail } from 'ionicons/icons';
import './Tab2.css';
import email from './email.png'
import whatsapp from './whatsapp.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'



const Tab2: React.FC = () => {
  return (
    
        <IonPage>
          <IonHeader>
           <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='name1'> Contact Us</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className='body'>
          

          <div className="contacts">
            <br></br>On our email;
            
            <br></br> <IonImg src={email} className="contact-icons"/><IonLabel> umsebenziwethu@yahoo.com</IonLabel>
            <br></br>or on our <IonImg src={whatsapp} className="contact-icons"/><IonLabel>whatApp @0656718717</IonLabel>

            <br></br>
            <br></br> Be sure to engage with us on our social media platforms;
            <a href="https://www.facebook.com"><IonImg src={facebook} className="contact-icons"/></a><IonLabel>@Umsebenzi Wethu</IonLabel>
            <a href="https://www.instagram.com"><IonImg src={instagram} className="contact-icons"/>
            </a><IonLabel>@UmsebenziW</IonLabel>
            <a href="https://twitter.com">  <IonImg src={twitter} className="contact-icons"/></a>
            <IonLabel>@UmsebenziW</IonLabel>
          </div>
        
        </IonContent>
  
      </IonPage>
    );
  };


export default Tab2;
