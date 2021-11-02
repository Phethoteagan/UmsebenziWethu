import { IonMenuButton,IonButtons,IonImg,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent,IonGrid, IonRow, IonCol, ViewLifeCycleManager} from '@ionic/react';
import { useState } from 'react';
import './Default.css';
import cleaning from './cleaning.jpg'
import farming from './farming.jpg'
import plumbing from './plumbing.jpg'
import gardening from './gardening.jpg'
import babysitting from './babysitting.jpg'
import painting from './painting.jpg'


<<<<<<< Updated upstream


const Default: React.FC = () => {
  const [apply1,setApply] = useState('APPLY HERE');
  const [apply2,setApply2] = useState('APPLY HERE');
  const [apply3,setApply3] = useState('APPLY HERE');
  
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
  
=======
const Default = () => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
           
           

            <div className='buttons'>
            
             
            <h1 className='welcome'>{timeOfDay} Welcome To Umsebenzi Wethu</h1>

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
                <h1 style={{color:'white'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonRow>
                <p>*Cleaner Needed (Westdene):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}} onClick={()=>Applied()}><u>{apply1}</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Window Cleaner (Sandton):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}} onClick={()=>Applied2()}><u>{apply2}</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Laundry Services (Randburg):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}} onClick={()=>Applied3()}><u>{apply3}</u></button><br/>
                </IonRow>
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
                <h1 style={{color:'white'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonRow>
                <p>*Truck Plaugher(Alex):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>* Cabbage Plantation (Sandton):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Watering Services (Randburg):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
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
                <h1 style={{color:'white'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonRow>
                <p>*Kitchen Plumber Needed (Soweto):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Leaking Bathroom fix (Newtown):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Toilet Plumber Needed (Kempton):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
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
                <h1 style={{color:'white'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonRow>
                <p>*Succulent Garden Fix (Melville):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Weed Remover (Newtown):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Garden Watering(Kempton):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
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
                <h1 style={{color:'white'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonRow>
                <p>*3 year old to Babysit (Melville):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Home School 12yr old(Newtown):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Daycare Needed (Kempton):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
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
                <h1 style={{color:'white'}}>Available Jobs In This Category: </h1>
                <br></br>
                <IonRow>
                <p>*House Painterin Need (Melville):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Kitchen Renovator Needed (Newtown):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
                <IonRow>
                <p>*Wall Builder Needed(Kempton):</p><button style={{backgroundColor:'#013220', color:'dodgerblue'}}><u>APPLY HERE</u></button><br/>
                </IonRow>
=======
          <IonToolbar>
            {/* VERY IMPORTANT BUTTON */}
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>
              <div className='buttons'>
              
                <h1 className='welcome'>{timeOfDay}, Welcome To Umsebenzi Wethu</h1>
>>>>>>> Stashed changes
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