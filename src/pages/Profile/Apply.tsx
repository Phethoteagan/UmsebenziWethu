import React from 'react';
import "./Style.css";
import { IonImg ,IonIcon,IonFab,IonGrid,IonFabButton,IonRow,IonLabel,IonItem,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";

const Apply: React.FC = () => {
    const { photo, takePhoto} = usePhotoGallery();
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                {/* VERY IMPORTANT BUTTON */}
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
            <IonButton class="applyBtn" color="light">Apply</IonButton>
            <IonButton class="postBtn" color="secondary" href="./pages/Profile/Post">Post</IonButton><br/>
            <IonTitle class="cdTitle" >User Details</IonTitle>

            {/* <img src="https://static.vecteezy.com/system/resources/previews/002/002/247/non_2x/beautiful-black-woman-avatar-character-icon-free-vector.jpg" alt="" className="addImgIcon"/> */}

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
            <IonButton class="jobDes" size="large">Plumbing</IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="warning">Pending</IonButton>
            <IonButton class="jobs" color="medium">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">Database Admin</IonButton><br/>

            <IonButton class="jobs" color="medium">Rejected</IonButton>
            <IonButton class="jobs" color="medium">Pending</IonButton>
            <IonButton class="jobs" color="danger">Approved</IonButton><br/>
            <IonButton class="jobDes" size="large">Drone Admin</IonButton><br/>
        </IonContent>
    </IonPage>
    )
    };

export default Apply