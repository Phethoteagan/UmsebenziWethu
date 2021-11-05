import { useEffect } from "react";
import React from "react";
import "./Style.css";

import {
  IonFab,
  IonFabButton,
  IonImg,
  IonGrid,
  IonRow,
  IonItem,
  IonIcon,
  IonInput,
  IonButton,
  IonContent,
  IonPage,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonLabel,
  IonSelectOption,
  IonSelect,
} from "@ionic/react";
import { personOutline, chevronDownOutline } from "ionicons/icons";
import { camera } from "ionicons/icons";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, addDoc } from "@firebase/firestore";
import "firebase/firestore";
// import { ellipsisVerticalSharp } from "ionicons/icons";
import { setDoc, query, where, getDocs, getDoc } from "@firebase/firestore";
import db from "../../firebaseConfig";
import UserProfile from "../userSession";

const DisplayJobs = ({ userId, status }) => {

    const [user, setUser] = useState({})

    useEffect(async () => {
        const dbQuery = query(
        collection(db, "users"),
        where("email", "==", userId)
        );
        var data = "";
        const queryuser = await getDocs(dbQuery);
        queryuser.forEach((user) => {
            setUser(user.data());
        });
    });

    

  return (
    <>
      {/* user.status == rejected ? "medium":"white" */}
      <IonButton class="jobs" color="medium">
        Rejected
      </IonButton>
      <IonButton class="jobs" color="warning">
        Pending
      </IonButton>
      <IonButton class="jobs" color="medium">
        Approved
      </IonButton>
      <br />
      <IonButton class="jobDes" size="large">
        <ul style={{ textAlign: "left" }}>
          <ul
            style={{
              color: "black",
              paddingRight: "10px",
              marginRight: "5px",
            }}
          >
            {" "}
            <IonIcon
              slot="start"
              icon={personOutline}
              style={{ color: "white", paddingRight: "10px" }}
            />
            {user.firstName} {user.lastName}
          </ul>
          <ul
            style={{
              color: "black",
              paddingRight: "10px",
              marginRight: "5px",
            }}
          >
            {" "}
            <IonIcon
              slot="start"
              icon={chevronDownOutline}
              style={{ color: "white", paddingRight: "10px" }}
            />
            {user.email}
          </ul>
        </ul>
    
      </IonButton>
      <br />
    </>
  );
};

export default DisplayJobs;
