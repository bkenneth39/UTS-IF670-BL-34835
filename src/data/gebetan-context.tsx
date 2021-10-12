import React from "react";

export interface Gebetan {
    id: string,
    name: string,
    bio: string,
    jeniskel: string,
    photo: string,
    status: string
}

interface Context {
    CalonGebetans: Gebetan[];
    Gebetans: Gebetan[];
    
    updateStatus: (Gebetan: Gebetan, newValue: any) => void
   
}

const GebetanContext = React.createContext<Context>({
    CalonGebetans: [],
    Gebetans: [],
    updateStatus: () => {},
})

export default GebetanContext