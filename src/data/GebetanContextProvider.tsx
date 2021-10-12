import { doesNotReject } from "assert";
import { count } from "console";
import React, {useState} from "react";
import GebetanContext, {Gebetan} from "./gebetan-context"

const GebetanContextProvider: React.FC = props => {
    // const [updated, setUpdated] = useState<Gebetan[]>([])
    const [CalonGebetans, setCalonGebetans] = useState<Gebetan[]>([
        {
            id: '1',
            name: 'Shinta Kusuma',
            bio: 'Aku suka cowo macho',
            jeniskel: 'Perempuan',
            photo: 'https://cdn1-production-images-kly.akamaized.net/QN-zKpU4nPFFBhX7H5MRqJoZ_FQ=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2329858/original/019678700_1534243085-Scarlett_Johansson_-_JOHN_SHEARER__GETTY_IMAGES_NORTH_AMERICA__AFP.jpg',
            status: 'not gebeted'
        },
        {
            id: '2',
            name: 'Tony hehe',
            bio: 'Aku cowo humoris',
            jeniskel: 'Laki-Laki',
            photo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg',
            status: 'not gebeted'
        },
        {
            id: '3',
            name: 'Bella Humorisa',
            bio: 'Aku suka ketawa',
            jeniskel: 'Perempuan',
            photo: 'https://p4.wallpaperbetter.com/wallpaper/398/976/44/kristen-stewart-twilight-girl-hd-bella-swan-wallpaper-preview.jpg',
            status: 'not gebeted'
        },
        {
            id: '4',
            name: 'Joko Pintar',
            bio: 'Aku cowo jenius',
            jeniskel: 'Laki-laki',
            photo: 'https://akcdn.detik.net.id/visual/2017/06/21/fdac2685-1e5c-424e-8a8f-35b7738d74be_169.jpg?w=650',
            status: 'not gebeted'
        },
        {
            id: '5',
            name: 'John Thor',
            bio: 'Aku tinggal di Asgard',
            jeniskel: 'Laki-laki',
            photo: 'https://asset.kompas.com/crops/OYjoffBJ3-x6HqjDGdIH-A1syf0=/0x25:820x571/750x500/data/photo/2017/11/05/3650046131.jpeg',
            status: 'not gebeted'
        },
        {
            id: '6',
            name: 'Wanda Scarlett',
            bio: 'Aku paling kuat',
            jeniskel: 'Perempuan',
            photo: 'https://pict-b.sindonews.net/dyn/620/pena/news/2021/01/05/158/290192/trailer-baru-serial-wandavision-berikan-referensi-kelanjutan-superhero-avengers-xrt.jpg',
            status: 'not gebeted'
        },
        {
            id: '7',
            name: 'Vision Hugo',
            bio: 'Aku dari Tony',
            jeniskel: 'Laki-laki',
            photo: 'https://upload.wikimedia.org/wikipedia/id/f/fc/Paul_Bettany_as_Vision.jpg',
            status: 'not gebeted'
        },
        {
            id: '8',
            name: 'Bruce Ben',
            bio: "I'm big",
            jeniskel: 'Laki-laki',
            photo: 'https://pbs.twimg.com/profile_images/638103226382962693/piHD_6s1_400x400.jpg',
            status: 'not gebeted'
        },
        {
            id: '9',
            name: 'Clint Eastwood',
            bio: 'Mataku tajam',
            jeniskel: 'Laki-laki',
            photo: 'https://i.pinimg.com/474x/d5/ab/44/d5ab44775fd34d7d590c99600320f703.jpg',
            status: 'not gebeted'
        },
        {
            id: '10',
            name: 'John Cena',
            bio: 'Aku kuat',
            jeniskel: 'Laki-laki',
            photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Paul_Rudd_as_Ant-Man.jpg/250px-Paul_Rudd_as_Ant-Man.jpg',
            status: 'not gebeted'
        },
    ]);

    const [Gebetans, setGebetans] = useState<Gebetan[]>([])
   

    const updateStatus = (Gebetan: Gebetan, newValue: any) => {
       
        let id:any = Gebetan.id
        if(Gebetan.status==="not gebeted"){
            // console.log(Gebetan.id)
            // console.log(Gebetan.status)
            setCalonGebetans((currCalon: Gebetan[]) => {
                Gebetan.status = "gebeted"
                for(let i=0;i<currCalon.length;i++){
                    if(currCalon[i].id === id){
                        currCalon.splice(i,1)
                    }
                }
               
                return currCalon
            })
           
            setGebetans((currGebetan: Gebetan[]) => {
                Gebetan.status = "gebeted"
                return currGebetan.concat(Gebetan)
            })
            console.log(newValue)
        } else if(Gebetan.status==="gebeted"){
            // console.log(CalonGebetans)
            setGebetans((currGebetan: Gebetan[]) => {
                
                for(let i=0;i<currGebetan.length;i++){
                    if(currGebetan[i].id === id){
                        currGebetan.splice(i,1)
                    }
                }
                return currGebetan
            })
          
            setCalonGebetans((currCalon: Gebetan[]) => {
                console.log(parseInt(id)-1)
                // currCalon.splice(parseInt(id)-1,0,Gebetan)
                Gebetan.status = "not gebeted"
               
                // console.log(currCalon)
                return currCalon.concat(Gebetan)
            })
            // Gebetan.status = "not gebeted"
            console.log(newValue)
        }
       
    }
   

    return(
        <GebetanContext.Provider value={{
            CalonGebetans,
            Gebetans,
            updateStatus,
        }}>
            {props.children}
        </GebetanContext.Provider>
    )
    



}

export default GebetanContextProvider