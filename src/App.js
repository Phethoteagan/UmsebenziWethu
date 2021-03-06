import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Slider from "./pages/Slider";
import Wethu from "./pages/Wethu";
import Post from "./pages/Profile/Post";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Startup from "./Startup";

// import Default from './pages/Home/Default';
/*Font awesome thangs*/

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Startup />

        <Route path="/" exact={true}>
          {/* <Wethu /> */}
          <Slider />
          {/* setTimeout(function(){<Redirect to="/slider" />}, 50000); */}
        </Route>

        {/* <Route path="/slider">
          <Slider />
          {/* <Post /> */}
        {/* </Route>  */}

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/Start">
          <Signin />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
