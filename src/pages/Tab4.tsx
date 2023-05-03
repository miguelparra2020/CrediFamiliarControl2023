import { IonContent, IonHeader, IonPage,  IonToolbar } from '@ionic/react';
import Toolbar from '../components/Toolbar';
import './Tab4.css';

import DataSaldoDepRet from '../components/dataSaldoDepRet';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DataSaldoDepRet/>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
