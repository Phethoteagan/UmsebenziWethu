import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {desktopSharp,desktopOutline,informationOutline,informationSharp,archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, logOutOutline, logOutSharp, personCircleOutline, personCircleSharp,} from 'ionicons/icons';
import './Menu.css';
import greyWethu from "../img/greyWethu.jpeg";
import UserProfile from '../pages/userSession';
import {db} from '../firebaseConfig'
import { useEffect, useState } from 'react';
import {getDoc, collection, query, where} from 'firebase/firestore';
import { getDocs } from '@firebase/firestore';

// interface AppPage {
//   url: string;
//   iosIcon: string;
//   mdIcon: string;
//   title: string;
// }

const appPages = [
  {
    title: 'Home',
    url: '/pages/home/default',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'My Profile',
    url: '/pages/profile/apply',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  {
    title: 'Post a Job',
    url: '/pages/profile/post',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Dashboard',
    url: '/pages/dashboard',
    iosIcon: desktopOutline,
    mdIcon: desktopSharp
  },
  {
    title: 'About',
    url: '/pages/about/about',
    iosIcon: informationOutline,
    mdIcon: informationSharp
  },
  {
    title: 'Logout',
    url: '/Login',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp,
  },
];




const Menu = () => {
  const location = useLocation();
  const [displayName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //const [photo, setPhoto] = useState('')
  const email = UserProfile.getName().toString()

  // you can also use it in profile to display use details
  useEffect(async() => {
    let userData = ""
    const dbQuery = query(collection(db,"users"),
          where("email", "==", email));

    const queryResults = await getDocs(dbQuery)
    queryResults.forEach((user) => {
      userData = user.data();
      // console.log("found jobs: ", job.data());
      console.log(user.displayName)
    });
    setFirstName(userData.displayName)
    setLastName(userData.lastName)
  },[])

  function logOut(params) {
    console.log("logged out")
    window.location.replace("/login");
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
    

        <IonList id="inbox-list">
          <IonListHeader>{displayName} {lastName}</IonListHeader>
          <IonNote className="header">{email}</IonNote>
          <img alt="" className= "logo" src={greyWethu}/>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}
                  onClick={() => appPage.title == 'Logout' ? logOut():""}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          {/* <IonButton expand="full" href="/src/pages//Login.tsx">Logout</IonButton> */}
        </IonList>
        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
