import { IonContent, IonPage, IonImg, IonButton
} from '@ionic/react';
import './Login.css';


const Wethu: React.FC = () => {
    return (
        <IonPage>
        <IonContent>
        <IonImg src="../assets/logo.jpg" className="WethuAnimation"></IonImg>
        
        <IonButton className="button" color="#5ce1e6" href="./slider">Click here to continue</IonButton>
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default Wethu;
  