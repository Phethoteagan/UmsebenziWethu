import React from 'react';

import { IonImg ,IonIcon,IonFab,IonGrid,IonFabButton,IonRow,IonLabel,IonItem,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';


import DatabaseMain from './DatabaseMain.js'

const DashboardMain = () => {
   


    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
             {/* VERY IMPORTANT BUTTON */}
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent >
            
                

            
            
            <DatabaseMain />
        </IonContent>
    </IonPage>
    )
    };

export default DashboardMain;