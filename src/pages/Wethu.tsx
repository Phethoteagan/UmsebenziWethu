import { IonContent, IonPage, IonImg, IonButton
} from '@ionic/react';
import './Login.css';
import logo from './logo.jpg'

const Wethu: React.FC = () => {
    return (
        <IonPage>
        <IonContent className='ContentBlock'>
        <IonImg src={logo} className="WethuAnimation"></IonImg>
        
        <IonButton className="button LBtn" color="#5ce1e6" href="./slider">Click here to continue</IonButton>
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default Wethu;
  