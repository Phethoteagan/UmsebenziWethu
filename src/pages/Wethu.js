import { IonContent, IonPage, IonImg, IonButton
} from '@ionic/react';
import './Login.css';
import WhiteWethu from './WhiteWethu.jpg'

const Wethu = () => {
    return (
        <IonPage>
        <IonContent className='ContentBlock'>
        <IonImg src={WhiteWethu} className="WethuAnimation"></IonImg>

        <div className="link1"><a href="./slider">Continue</a></div>

        </IonContent>
  
      </IonPage>
    );
  };
  
  export default Wethu;
  