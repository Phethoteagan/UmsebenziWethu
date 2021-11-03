import {  IonMenuButton,IonButtons, IonHeader, IonTitle,
  IonContent, IonPage, IonImg, IonLabel, IonToolbar } from '@ionic/react';
import { mail } from 'ionicons/icons';
import './Tab2.css';
import email from './email.png'
import whatsapp from './whatsapp.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'



const Tab2 = () => {
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
            <br/>Contact us On our email;
            
            <p> umsebenziwethu@yahoo.com</p>
            <IonImg src={email} className="contact-icons"/>
            <p>whatApp @0656718717</p>
            <IonImg src={whatsapp} className="contact-icons"/>
            <p> or Tel. (011) - wethu</p>

            <br/>
            <br/> Be sure to engage with us on our social media platforms;
            <p>@Umsebenzi Wethu</p>
            <a href="https://www.facebook.com"><IonImg src={facebook} className="contact-icons"/></a>
            
            <p>@UmsebenziW</p>
            <a href="https://www.instagram.com"><IonImg src={instagram} className="contact-icons"/>
            </a>

            <p> @UmsebenziW</p>
            <a href="https://twitter.com">  <IonImg src={twitter} className="contact-icons"/></a>
           
          </div>
        
        </IonContent>
  
      </IonPage>
    );
  };


export default Tab2;
