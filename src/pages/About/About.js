import { IonMenuButton,IonButtons,IonTabButton,IonTabBar,IonLabel,IonTabs,IonApp, IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
// import ButtonMenu from './components/ButtonMenu';
// import Page from './pages/Page';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';



const About = () => {
return (
    <IonApp>
        <Tab1/>
                    {/* VERY IMPORTANT BUTTON */}
                    <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
        <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
            <Route exact path="/tab1">
                <Tab1 />
            </Route>
            <Route exact path="/tab2">
                <Tab2 />
            </Route>
            <Route path="/tab3">
                <Tab3 />
            </Route>
            <Route path="/tab4">
                <Tab4 />
            </Route>
            
            <Route exact path="/">
                <Redirect to="/tab1" />
            </Route>
            
            </IonRouterOutlet>
            <IonTabBar slot="bottom" className='btab'>
            <IonTabButton tab="tab1" href="/tab1" className='btab'>
                <IonLabel>About Umsebenzi Wethu</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2" className='btab'>
                <IonLabel>Contacts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3" className='btab'>
                <IonLabel>Terms & Conditions</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4" className='btab'>
                <IonLabel>Privacy Policy</IonLabel>
            </IonTabButton>
            </IonTabBar>
        </IonTabs>
        </IonReactRouter>
    </IonApp>
    );
};

export default About;
