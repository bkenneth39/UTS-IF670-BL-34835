import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToast, IonToolbar, isPlatform } from "@ionic/react"
import { addOutline, femaleOutline, filterOutline, heart, heartCircle, maleOutline, person, personCircle } from "ionicons/icons"
import React,{ useContext, useRef, useState, useEffect } from "react"
import GebetanContext, { Gebetan } from "../data/gebetan-context"
import './daftarCalon.css'

const DaftarCalon:React.FC = () => {
    const gebetanContext = useContext(GebetanContext)
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const [LoadProcess, setLoadProcess] = useState(false);
   

    const startAddtoGebetan = (gebetan: Gebetan) => {
        slidingOptionsRef.current?.closeOpened();
        setLoadProcess(true)
        gebetanContext.updateStatus(gebetan, 'updated')
        
    }

    
  


    setTimeout(() => {
        setLoadProcess(false);
    }, 1500);
    
    return(
        <React.Fragment>
            
            <IonLoading
               
                isOpen={LoadProcess}
                onDidDismiss={() => setLoadProcess(false)}
                message={'Mohon menunggu'}
                duration={1500}
            />
        <IonPage>
            <IonHeader>
            <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton color="primary"/>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton routerLink="/profile">
                            <IonIcon icon={personCircle} color="primary" style={{height:'35px', width:'35px'}}></IonIcon>
                        </IonButton>

                    </IonButtons>
                   
                    <IonTitle>GebetApp</IonTitle>
                </IonToolbar>
            </IonHeader>
        
            <IonContent>
                <IonList>
                    {gebetanContext.CalonGebetans.map(gebetan => (
                       
                        <IonItemSliding key={gebetan.id} ref={slidingOptionsRef} style={{marginTop: '15px'}}>
                        <IonItemOptions side="end">
                            <IonItemOption color="danger" onClick={startAddtoGebetan.bind(null,gebetan)}>
                                <IonIcon icon={heart} style={{width:'60px', height:'30px'}}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                                <IonItem lines="full" >
                                     <IonThumbnail slot="start" style={{ width:'90px', height:'90px'}} className="thumbnail">
                                        <img src={gebetan.photo} alt="no" />
                                    </IonThumbnail>
                                    <div>
                                        <IonLabel style={{
                                            fontSize:'1.2rem',
                                            fontWeight:'bold'

                                        }}>{gebetan.name}</IonLabel>
                                        <p style={{
                                            fontSize: '0.8rem',
                                            marginTop: '10px',
                                            fontWeight: 'normal'
                                        }}>{gebetan.bio}</p>
                                        <div style={{display: 'inline-flex',height:'20px'}}>
                                           {gebetan.jeniskel==="Perempuan" ?<IonIcon slot="start" color="primary" className="icon-jk" icon={femaleOutline} /> : <IonIcon slot="start" color="primary" className="icon-jk" icon={maleOutline} /> }
                                           <p style={{
                                            fontSize: '0.8rem',
                                            marginLeft: '5px',
                                            marginTop: '0px',
                                            fontWeight: 'normal'
                                        }} className="p-jk">{gebetan.jeniskel}</p> 
                                        </div>
                                    </div>
                                   
                                </IonItem>
                        </IonItemSliding>
                        
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
        </React.Fragment>
    )
}

export default DaftarCalon