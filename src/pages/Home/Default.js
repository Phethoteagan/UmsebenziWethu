import { IonMenuButton,IonButtons,IonImg,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton,IonGrid, IonRow, IonCol, ViewLifeCycleManager} from '@ionic/react';
import { useState } from 'react';
import './Default.css';
import cleaning from './cleaning.jpg'
import farming from './farming.jpg'
import plumbing from './plumbing.jpg'
import gardening from './gardening.jpg'
import babysitting from './babysitting.jpg'
import painting from './painting.jpg'
import { useHistory } from 'react-router';
import UserProfile from '../userSession';


const Default = () => {
  const [apply1,setApply] = useState('APPLY HERE');
  const [apply2,setApply2] = useState('APPLY HERE');
  const [apply3,setApply3] = useState('APPLY HERE');
  console.log("logged user:",UserProfile.getName())
  // router redirecter
  const history = useHistory()
  // const [jobDescription, setJobDescription] = useState("");
  function Applied(){
    setApply('Applied!');
    alert("job application sent")

  }
  function Applied2(){
    setApply2('Applied!');
    alert("job application sent")

  }
  function Applied3(){
    setApply3('Applied!');
    alert("job application sent")

  }
  
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "Good Morning,"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good afternoon,"
  } else {
    timeOfDay = "Good Evening"
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>


          <IonTitle className="defaultHeader">
            <div className='buttons'>
             
            <marquee direction="left" behavior="slide">
              <h1 className='welcome'>{timeOfDay} Welcome To Umsebenzi Wethu</h1>
            </marquee>

            </div>
          </IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='background'>

       <IonGrid  className="grid2" >
       <IonRow>
      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
         
              <div className="flip-card-front">
                <IonImg src={cleaning} alt="Cleaning" ></IonImg>
                <div className="caption">Domestic Work</div>
                </div>
                <div className="flip-card-back">
                <h1 style={{color:'black'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonButton
                class="applyBtn"
                color="secondary"
                onClick={() => {history.push("../Dashboard/domestic")}}
                >
                  View jobs
                </IonButton>
                
              </div>
            </IonCardContent>
      </IonCard>
     
      <IonCard color="light" className="flip-card2">
         <IonCardContent className="flip-card-inner2">
              <div className="flip-card-front2">
                <img src={farming} alt="farming" width='600px' height='232px'></img>
                <div className="caption2">Farming</div>
                </div>
                <div className="flip-card-back2">
                <h1 style={{color:'black'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonButton
                  class="applyBtn"
                  color="secondary"
                  // value={jobDescription}
                  onClick={() => {history.push("../Dashboard/farming")}}
                >
        View jobs
          </IonButton>
              </div>
            </IonCardContent>
      </IonCard>
      </IonRow>

      <IonRow>
      <IonCard color="light" className="flip-card3">
         <IonCardContent className="flip-card-inner3">
              <div className="flip-card-front3">
                <img src={plumbing} alt="plumbing" ></img>
                <div className="caption3">Plumbing</div>
                </div>
                <div className="flip-card-back3">
                <h1 style={{color:'black'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonButton
                  class="applyBtn"
                  color="secondary"
                  href="./pages/Dashboard"
                  onClick={() => {history.push("../Dashboard/plumbing")}}
        >
          View jobs
        </IonButton>
              </div>
            </IonCardContent>
      </IonCard>
     
      <IonRow>
    
      <IonCard color="light" className="flip-card4">
         <IonCardContent className="flip-card-inner4">
              <div className="flip-card-front4">
                <img src={gardening} alt="gardening" height='240px' ></img>
                <div className="caption4">Gardening</div>
                </div>
                <div className="flip-card-back4">
                <h1 style={{color:'black'}}>Available Jobs In This Category: </h1>
                <br></br>
                
                <IonButton
                class="applyBtn"
                color="secondary"
                onClick={() => {history.push("../Dashboard/gardening")}}
        >
          View jobs
        </IonButton>
              </div>
            </IonCardContent>
      </IonCard>
      </IonRow>

      <IonRow>
      <IonCard color="light" className="flip-card5">
         <IonCardContent className="flip-card-inner5">
              <div className="flip-card-front5">
                <img src={babysitting} alt="babysitting" height='240px'></img>
                <div className="caption5">Nursery</div>
                </div>
                <div className="flip-card-back5">
                <h1 style={{color:'black'}}>Available Jobs In This Category: </h1>
                <br></br>
                
                <IonButton
                class="applyBtn"
                color="secondary"
                onClick={() => {history.push("../Dashboard/babysitting")}}
        >
          View jobs
        </IonButton>
              </div>
            </IonCardContent>
      </IonCard>

      <IonCard color="light" className="flip-card6">
         <IonCardContent className="flip-card-inner6">
              <div className="flip-card-front6">
                <img src={painting} alt="painting" ></img>
                <div className="caption6">Construction</div>
                </div>
                <div className="flip-card-back6">
                <h1 style={{color:'black'}}>Available Jobs In This Category: </h1>
                <br></br>
                
                <IonButton
                  class="applyBtn"
                  color="secondary"
                  onClick={() => {history.push("../Dashboard/construction")}}
        >
          View jobs
        </IonButton>
               
              </div>
            </IonCardContent>
           
      </IonCard>
        </IonRow>






       </IonRow>
       </IonGrid>





        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Default;