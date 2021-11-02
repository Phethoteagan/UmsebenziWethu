import React from 'react';

import { IonImg ,IonIcon,IonFab,IonGrid,IonFabButton,IonRow,IonLabel,IonItem,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';


import Database from './Database.js'

const Dashboard = () => {
   


    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent >
            
                

            
            
            <Database />
        </IonContent>
    </IonPage>
    )
    };

export default Dashboard