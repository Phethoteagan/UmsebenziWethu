import React from 'react';
import "./Style.css"
import {IonFab,IonFabButton,IonImg ,IonGrid,IonRow,IonItem,IonIcon,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar, IonLabel } from '@ionic/react';
import {  personOutline, chevronDownOutline} from 'ionicons/icons';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";

const Post: React.FC = () => {
    const { photo, takePhoto} = usePhotoGallery();
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent>
            {/*-- Anchor --*/}
            {/* <IonButton href="#">Anchor</IonButton> */}

            {/*-- Colors --*/}
            <IonButton class="applyBtn" color="secondary" href="./pages/Profile/Apply">Apply</IonButton>
            <IonButton class="postBtn" color="light" >Post</IonButton><br/>
            <IonTitle class="cdTitle">Company Details</IonTitle>
            {/* <img src="https://www.lifeisagarden.co.za/wp-content/uploads/2021/03/LIAG-Web-Banner-Feb-2021-385x426.jpg" alt=""  className="addImgIcon"/> */}
    
                <IonGrid>
                    <IonGrid>
                        <IonRow className="addImgIcon">
                        {photo && <IonImg  src={photo.webviewPath } />}
                        </IonRow>
                    </IonGrid>
                    <IonFab >
                    <IonFabButton className="cameraIcon" onClick={() => takePhoto()}>
                        <IonIcon  icon={camera}></IonIcon>
                    </IonFabButton>
                    </IonFab>
                </IonGrid>

            <IonContent className="camCont">
                <IonRow class="item" >
                    <IonItem>
                        <IonLabel position= "floating">User Name </IonLabel><IonInput/>
                    </IonItem><br/>
                    <IonItem>
                        <IonLabel position= "floating">Surname</IonLabel><IonInput/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position= "floating">Skills </IonLabel><IonInput/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position= "floating">Address </IonLabel><IonInput/>
                    </IonItem>
                </IonRow>
            </IonContent>
            <IonTitle class="title">Applied Jobs</IonTitle><br/>

            <IonButton class="jobs" color="success">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">
            <ul style={{textAlign:"left"}}>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />Mikayla Mcunu</ul>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />mmcunu12@gmail.com</ul>
            </ul>
                <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                    <li >Hard Worker</li>
                    <li>10 years experience</li>
                    <li>Communication skills</li>
                </ul>
            </IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="warning">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">
            <ul style={{textAlign:"left"}}>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />Andile Marwala</ul>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />amarwala2@gmail.com</ul>
            </ul>
                <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                    <li >Critical Think</li>
                    <li>5 years experience</li>
                    <li>N4 Plumbing</li>
            </ul>
            </IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="danger">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">
            <ul style={{textAlign:"left"}}>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />Mikayla Mcunu</ul>
                    <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />mmcunu12@gmail.com</ul>
            </ul>
                <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                    <li >Hard Worker</li>
                    <li>10 years experience</li>
                    <li>Airpot license</li>
            </ul>
            </IonButton><br/>

        </IonContent>
    </IonPage>
    );
};

export default Post