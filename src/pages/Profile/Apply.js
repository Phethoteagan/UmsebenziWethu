import React, {useState, useEffect}from 'react';
import "./Style.css";
import { IonImg ,IonIcon,IonFab,IonGrid,IonFabButton,IonRow,IonLabel,IonItem,IonInput,IonButton, IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import Database from '../Database.js'
import { personOutline, chevronDownOutline } from "ionicons/icons";
import { setDoc, query, where, getDocs, getDoc } from "@firebase/firestore";
import { collection,addDoc} from '@firebase/firestore';
import {db} from "../../firebaseConfig"
import UserProfile from './../userSession';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const Apply= () => {

    const { photo, takePhoto} = usePhotoGallery();

  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [skills,setSkills] = useState("");
  const [address,setAddress] = useState("");
  // current logged user posted jobs
  const [jobs, setJobs] = useState([]);

 function reg() {

    var coll=collection(db,"Users");
    
    if( name.trim()==='' || skills.trim()==='' || address.trim()==='' || surname.trim()===''){
     alert("Please fill in all the fields");
     
    }
    
    {addDoc(coll,{
      "Name":{name},
      "Address":{address},
      "Skills":{skills},
      "Surname":{surname}
    })
    alert("Your User Registration was successful");}


    
  }

    useEffect(async () => {
        var foundDiscussions = [];
        const dbQuery = query(
        collection(db, "appliedJobs"),
        where("email", "==", UserProfile.getName())
        );
        const queryResults = await getDocs(dbQuery);

        queryResults.forEach((dis) => {
        var data = dis.data();
        data["id"] = dis.id;
        foundDiscussions.push(data);
        });
        setJobs(foundDiscussions);
    }, []);

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar className="apply-toolbar">
                {/* VERY IMPORTANT BUTTON */}
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent className="apply-page">
            {/*-- Anchor --*/}
            {/* <IonButton href="#">Anchor</IonButton> */}

            {/*-- Colors --*/}
            
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

            <IonContent >
            <IonRow class="item" >
                <IonItem>
                    <IonLabel position= "floating">User Name </IonLabel>
                    <IonInput onIonChange={(e)=>setName(e.target.value)} ></IonInput>
                </IonItem><br/>
                <IonItem>
                    
                    <IonLabel position= "floating">Surname</IonLabel>
                    <IonInput onIonChange={(e)=>setSurname(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position= "floating">Skills </IonLabel>
                    <IonInput onIonChange={(e)=>setSkills(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position= "floating">Address </IonLabel>
                    <IonInput onIonChange={(e)=>setAddress(e.target.value)}></IonInput>
                </IonItem>
            </IonRow>
            <IonButton onClick={()=>reg()}>Update Profile</IonButton>
            <IonTitle class="title">Applied Jobs</IonTitle><br/>

            {jobs.map((job) => {
                return(
                <>
                {console.log("job here:",job)}
                    <div>
                        <div style={{display:'flex', justifyContent:"space-between"}}>
                            <IonButton class="jobs" style={{margin:"0px"}} color={job.status == 'rejected'?"danger":""}>Rejected</IonButton>
                            <IonButton class="jobs" style={{margin:"0px"}} color={job.status == 'pending'?"warning":""}>Pending</IonButton>
                            <IonButton class="jobs" style={{margin:"0px"}} color={job.status == 'approved'?"success":""}>Approved</IonButton>
                        </div>
                        <IonButton style={{marginleft:"-50px"}} class="jobDes" size="large">
                        <ul style={{textAlign:"left"}}>
                                <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={personOutline} style={{color:"white", paddingRight:"10px"}} />{job.name}</ul>
                                <ul style={{color:"black", paddingRight:"10px", marginRight:"5px"}}> <IonIcon slot="start" icon={chevronDownOutline} style={{color:"white",  paddingRight:"10px"}} />{job.email}</ul>
                        </ul>
                            <ul style={{ textAlign:"left", marginRight:"105px", color:"black"}}>
                                <li >{job.gender}</li>
                                <li>{job.status}</li>
                                <li>{job.email}</li>
                            </ul>
                        </IonButton><br/>
                    </div>
                </>
                )
            })
        }
            </IonContent>
            
        </IonContent>
    </IonPage>
    )
    };

export default Apply