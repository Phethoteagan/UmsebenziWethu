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
import { informationOutline,informationSharp,archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, logOutOutline, logOutSharp, personCircleOutline, personCircleSharp,} from 'ionicons/icons';
import './Menu.css';
import logo from "../pages/logo.jpg";



interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/pages/home/default',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Profile',
    url: '/pages/profile/apply',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  {
    title: 'About',
    url: '/pages/about/about',
    iosIcon: informationOutline,
    mdIcon: informationSharp
  },
  {
    title: 'Logout',
    url: '/pages/login',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>

        <IonList id="inbox-list">
          <IonListHeader>Umsebenzi Wethu</IonListHeader>
          <IonNote>info@umsebenziwethu.co.za</IonNote>
          <img alt="" className= "logo" src={logo}/>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
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
