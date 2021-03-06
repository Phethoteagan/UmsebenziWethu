import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from "./components/Menu"
// import ButtonMenu from './components/ButtonMenu';
// import Page from './pages/Page';
import Apply from './pages/Profile/Apply';
import Post from './pages/Profile/Post';
import About from './pages/About/About';
import Default from './pages/Home/Default';
import Dashboard from './pages/Dashboard';
import DashboardMain from './pages/DashboardMain'
import Form from "./pages/applyForm"


const Startup: React.FC = () => {
  return (
    <IonApp>
      
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu/>

      {/* <ButtonMenu/> */}
      <IonRouterOutlet id="main">
        {/* <Route path="/" exact={true}>
          <Redirect to="/page/Inbox" />
        </Route> */}
        {/* <Route path="/page/:name" exact={true}>
          <Page />
        </Route> */}
        <Default/>
        <Route path="/pages/Home/Default" exact={true}>
          <Default />
        </Route>
            <Route path="/pages/Profile/Apply" exact={true}>
              <Apply/>
            </Route>
            <Route path="/pages/Profile/Post" exact={true}>
              <Post/>
            </Route>
            <Route exact path="/pages/Dashboard/:category" >
              <Dashboard/>
            </Route>
            <Route exact path="/pages/Dashboard" >
              <DashboardMain />
            </Route>
            <Route exact path="/pages/Dashboard/job/:jobId" >
              <Form />
            </Route>
            <Route path="/pages/About/About" exact={true}>
              <About/>
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
    
  );
};

export default Startup;

