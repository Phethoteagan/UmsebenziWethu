import { IonContent, IonPage, IonImg, IonButton
} from '@ionic/react';
import './Login.css';
import logo from './logo.jpg'

const Wethu = () => {
    return (
        <IonPage>
        <IonContent className='ContentBlock'>
        <IonImg src={logo} className="WethuAnimation"></IonImg>
        
        <IonButton className="button-LBtn" href="./slider">Click here to continue</IonButton>
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default Wethu;
  