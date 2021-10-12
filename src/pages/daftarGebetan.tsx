import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel, IonThumbnail, IonLoading, IonButton, IonActionSheet, IonToast } from "@ionic/react"
import { caretForwardCircle, close, closeSharp, cropSharp, femaleOutline, happy, heart, heartCircle, maleOutline, personCircle, share, trash } from "ionicons/icons"
import React,{ useContext, useRef, useState } from "react"
import GebetanContext, { Gebetan } from "../data/gebetan-context"
import './daftarCalon.css'

const DaftarGebetan: React.FC = () => {
    const [ConfirmationAction, setConfirmationAction] = useState(false);
    const gebetanContext = useContext(GebetanContext)
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const [LoadProcess, setLoadProcess] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const startRemoveFromGebetan = (gebetan: Gebetan) => {
        slidingOptionsRef.current?.closeOpened();
        setLoadProcess(true)
        gebetanContext.updateStatus(gebetan, 'updated')
        setShowToast(true)
    }
    // setTimeout(() => {
    //     setLoadProcess(false);
    // }, 1000);
    return(
        <React.Fragment>
           
           <IonToast isOpen={showToast}
            message="Mantan target berada di list paling bawah halam List Calon"
            duration={2000}
            onDidDismiss={() => setShowToast(false)} />
            <IonLoading
                cssClass='my-custom-class'
                isOpen={LoadProcess}
                onDidDismiss={() => setLoadProcess(false)}
                message={'Please wait...'}
                duration={1000}
            />
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
               
                <IonTitle>Target Gebetan</IonTitle>
            </IonToolbar>
        </IonHeader>
    
        <IonContent>
        {gebetanContext.Gebetans.length===0 ?(
            <div style={{marginTop: '15px', justifyContent:'center', textAlign:'center'}}>
                <IonLabel>Anda belum punya target gebetan</IonLabel> <br/>
                <IonButton color="danger" style={{marginTop:'15px'}} routerLink="/home">Cari Gebetan</IonButton>
            </div>
        ) : (

            <IonList>
                  {gebetanContext.Gebetans.map(gebetan => (
                    <IonItemSliding key={gebetan.id} ref={slidingOptionsRef} style={{marginTop: '15px'}}>
                    <IonItemOptions side="end">
                        <IonItemOption color="danger" onClick={() => setConfirmationAction(true)}>
                            <IonIcon icon={closeSharp} style={{width:'60px', height:'30px'}}></IonIcon>
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
                                       {gebetan.jeniskel==="Perempuan" ?<IonIcon color="primary" slot="start" className="icon-jk" icon={femaleOutline} /> : <IonIcon color="primary" slot="start" className="icon-jk" icon={maleOutline} /> }
                                       <p style={{
                                        fontSize: '0.8rem',
                                        marginLeft: '5px',
                                        marginTop: '0px',
                                        fontWeight: 'normal'
                                    }} className="p-jk">{gebetan.jeniskel}</p> 
                                    </div>
                                </div>
                               
                            </IonItem>
                            <IonActionSheet
                                header="Yakin, gak gebet dia lagi?"
                                isOpen={ConfirmationAction}
                                onDidDismiss={() => setConfirmationAction(false)}
                                cssClass='my-custom-class'
                                buttons={[{
                                text: 'Yakin, hapus dia dari daftar!',
                                icon: happy,
                                handler: () => {
                                    startRemoveFromGebetan(gebetan)
                                }
                                },{
                                text: 'Gak yakin, kembali',
                                icon: close,
                                role: 'cancel',
                                handler: () => {
                                    
                                    console.log('Cie bingung ya!');
                                }
                                }]}
                            >
                        </IonActionSheet>
                    </IonItemSliding>

                    
                ))}
            </IonList>)}
        </IonContent>
    </IonPage>
    </React.Fragment>
    )
}

export default DaftarGebetan