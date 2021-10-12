import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {alert, list, mailOutline, people, person, settings, star, videocamOutline} from 'ionicons/icons'
/* Theme variables */
import './theme/variables.css';
import DaftarCalon from './pages/daftarCalon';
import GebetanContextProvider from './data/GebetanContextProvider'
import DaftarGebetan from './pages/daftarGebetan';
import Profile from './pages/profile';

const App: React.FC = () => (
  <IonApp>
   <IonReactRouter>
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>GebetApp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink="/home" >
              <IonIcon slot="start" icon={people} color="primary"/>
              <IonLabel>Daftar Calon Gebetan</IonLabel>
            </IonItem>
            <IonItem button routerLink="/gebetan" style={{marginTop: '15px'}}>
              <IonIcon slot="start" icon={star} color="primary"/>
              <IonLabel>Target Gebetan</IonLabel>
            </IonItem>
            <IonItem button routerLink="/profile" style={{marginTop: '15px'}}>
              <IonIcon slot="start" icon={person} color="primary"/>
              <IonLabel>Profil</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <GebetanContextProvider>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <DaftarCalon />
        </Route>
        <Route exact path="/gebetan">
          <DaftarGebetan />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      </GebetanContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
