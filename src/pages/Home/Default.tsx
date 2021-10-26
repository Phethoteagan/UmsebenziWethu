import { IonMenuButton,IonButtons,IonImg,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton,IonGrid, IonRow} from '@ionic/react';
import './Default.css';
import cleaning from './cleaning.jpg'
import farming from './farming.jpg'
import plumbing from './plumbing.jpg'
import gardening from './gardening.jpg'
import babysitting from './babysitting.jpg'
import painting from './painting.jpg'


const Default: React.FC = () => {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "Good Morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good Afternoon"
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
            <IonTitle>
              <div className='buttons'>
                <h1 className='welcome'>{timeOfDay}, Welcome To Umsebenzi Wethu</h1>
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
                      <div className="caption">Cleaner For Living Room Needed</div>
                      </div>
                      <div className="flip-card-back">
                      <h1>Required Skills:</h1>
                      <p>Thourouly Sweeping</p>
                      <p>Vacuuming</p>
                      <p>(Location: Soweto)</p>
                      <IonButton className="Apply" href="./pages/Profile/Apply">View Job</IonButton>
                    </div>
              </IonCardContent>
            </IonCard>

                  <IonCard color="light" className="flip-card2">
                    <IonCardContent className="flip-card-inner2">
                          <div className="flip-card-front2">
                            <img src={farming} alt="farming" width='600px' height='232px'></img>
                            <div className="caption2">Farmer Needed ASAP</div>
                            </div>
                            <div className="flip-card-back2">
                            <h1>Required Skills:</h1>
                            <p>Plaughing</p>
                            <p>Plantation</p>
                            <p>(Location: Midrand)</p>
                            <IonButton className="Apply2" href="./pages/Profile/Apply">View Job</IonButton>
                          </div>
                        </IonCardContent>
                  </IonCard>
                  </IonRow>

                  <IonRow>
                  <IonCard color="light" className="flip-card3">
                    <IonCardContent className="flip-card-inner3">
                          <div className="flip-card-front3">
                            <img src={plumbing} alt="plumbing" ></img>
                            <div className="caption3">Plumber Needed For Kitchen Sink</div>
                            </div>
                            <div className="flip-card-back3">
                            <h1>Required Skills:</h1>
                            <p>Pipe analysis</p>
                            <p>drain unblocking</p>
                            <p>(Location: Johannesburg North)</p>
                            <IonButton className="Apply3" href="./pages/Profile/Apply">View Job</IonButton>
                          </div>
                        </IonCardContent>
                  </IonCard>
              
                  <IonRow>
                
                  <IonCard color="light" className="flip-card4">
                    <IonCardContent className="flip-card-inner4">
                          <div className="flip-card-front4">
                            <img src={gardening} alt="gardening" height='240px' ></img>
                            <div className="caption4">3 Gardeners Needed</div>
                            </div>
                            <div className="flip-card-back4">
                            <h1>Required Skills:</h1>
                            <p>Seed Planting</p>
                            <p>Repotting</p>
                            <p>(Location: Aukland Park Johannesburg)</p>
                            <IonButton className="Apply4" href="./pages/Profile/Apply">View Job</IonButton>
                          </div>
                        </IonCardContent>
                  </IonCard>
                </IonRow>

                <IonRow>
                  <IonCard color="light" className="flip-card5">
                    <IonCardContent className="flip-card-inner5">
                          <div className="flip-card-front5">
                            <img src={babysitting} alt="babysitting" height='240px'></img>
                            <div className="caption5">Babysitter Needed for 12 Year old</div>
                            </div>
                            <div className="flip-card-back5">
                            <h1>Required Skills:</h1>
                            <p>Vigilant</p>
                            <p>Nurturing</p>
                            <p>(Location: Braamfontein)</p>
                            <IonButton className="Apply5" href="./pages/Profile/Apply">View Job</IonButton>
                          </div>
                        </IonCardContent>
                  </IonCard>
                  <IonCard color="light" className="flip-card6">
                    <IonCardContent className="flip-card-inner6">
                          <div className="flip-card-front6">
                            <img src={painting} alt="painting" ></img>
                            <div className="caption6">Painter For New House Needed</div>
                            </div>
                            <div className="flip-card-back6">
                            <h1>Required Skills:</h1>
                            <p>Mixing colors</p>
                            <p>Outlining</p>
                            <p>(Location: Kemptonpark)</p>
                            <IonButton className="Apply6" href="./pages/Profile/Apply">View Job</IonButton>
                          </div>
                    </IonCardContent>    
                  </IonCard>
                </IonRow>
          </IonRow>
        </IonGrid>
        {/* <IonHeader collapse="condense">
        </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default Default;