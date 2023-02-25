import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Toolbar from '../components/Toolbar';
import './Tab5.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 5</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
