import {
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
import { informationOutline,informationSharp,archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, trashOutline, trashSharp, personCircleOutline, personCircleSharp,} from 'ionicons/icons';
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
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'About',
    url: '/pages/about/about',
    iosIcon: informationOutline,
    mdIcon: informationSharp
  }
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
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
