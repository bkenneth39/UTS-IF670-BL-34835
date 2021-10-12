import { IonAvatar, IonButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { personCircle } from "ionicons/icons"
import "./profile.css"
const Profile:React.FC = () => {
    return(
        <IonPage>
             <IonHeader>
            <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton color="primary" />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton routerLink="/profile">
                            <IonIcon icon={personCircle} color="primary" style={{height:'35px', width:'35px'}}></IonIcon>
                        </IonButton>

                    </IonButtons>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent >
                <div className="profile"  >
                    <IonAvatar style={{height:'100px', width:'100px'}}>
                        <img src="/assets/image/profile.jpg" style={{alignSelf:'center'}}/>
                    </IonAvatar>
                </div>
                <div style={{textAlign:'center', marginTop: '15px'}}>
                        <IonLabel style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Bryan Kenneth</IonLabel> <br />
                        <IonLabel style={{marginTop: '15px', fontWeight:'normal', fontSize: '0.8rem'}}>00000034835</IonLabel>
                </div>
            
 
            </IonContent>
        </IonPage>
    )
}

export default Profile