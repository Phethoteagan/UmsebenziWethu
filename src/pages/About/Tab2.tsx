import {  IonMenuButton,IonButtons,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { mail } from 'ionicons/icons';
import './Tab2.css';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='name2'>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='body'>
        <p className='content2'>
          You Can get in touch with The UW Team on the Following Platforms:
          <br/>
          <br/>
          Tel: 011 567893
          <br/>
          <br/>
          email: info@umsebenziwethu@co.za
          <br/>
          <br/>
          fax: 011 3458


        </p>
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
