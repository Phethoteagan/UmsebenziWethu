import { IonMenuButton,IonButtons,IonImg,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton,IonGrid, IonRow, IonCol, ViewLifeCycleManager} from '@ionic/react';
import { useState } from 'react';
import './Default.css';
import cleaning from './cleaning.jpg'
import farming from './farming.jpg'
import plumbing from './plumbing.jpg'
import gardening from './gardening.jpg'
import babysitting from './babysitting.jpg'
import painting from './painting.jpg'
import corporation from './corporation.jpg'
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
      <IonHeader >
        <IonToolbar className="apply-toolbar" >
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>


          <IonTitle className="defaultHeader">
            <div className='buttons'>
             
            {/* <marquee direction="left" behavior="slide"> */}
              <h5 className='welcome'>{timeOfDay} Welcome <br/>To Umsebenzi Wethu</h5>
            {/* </marquee> */}

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
                <h1 className="Heading" style={{color:'black', fontWeight:"bold", marginTop:"25%"}}>Available Jobs In This Category: </h1>
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
     
      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
              <div className="flip-card-front">
                <img src={farming} alt="farming" width='600px' height='232px'></img>
                <div className="caption">Agriculture</div>
                </div>
                <div className="flip-card-back">
                <h1 className="Heading" style={{color:'black'}}>Available Jobs In This Category: </h1>
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
      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
              <div className="flip-card-front">
                <img src={plumbing} alt="plumbing" ></img>
                <div className="caption">Plumbing</div>
                </div>
                <div className="flip-card-back">
                <h1 className="Heading" style={{color:'black'}}>Available Jobs In This Category: </h1>
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
    
      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
              <div className="flip-card-front">
                <img src={corporation} alt="corporation" height='240px' width='345px'></img>
                <div className="caption">Corporation</div>
                </div>
                <div className="flip-card-back">
                <h1 className="Heading" style={{color:'black'}}>Available Jobs In This Category: </h1>
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
      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
              <div className="flip-card-front">
                <img src={babysitting} alt="babysitting" height='240px'></img>
                <div className="caption">Nursery</div>
                </div>
                <div className="flip-card-back">
                <h1 className="Heading" style={{color:'black'}}>Available Jobs In This Category: </h1>
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

      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
              <div className="flip-card-front">
                <img src={painting} alt="painting" ></img>
                <div className="caption">Construction</div>
                </div>
                <div className="flip-card-back">
                <h1 className="Heading" style={{color:'black'}}>Available Jobs In This Category: </h1>
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