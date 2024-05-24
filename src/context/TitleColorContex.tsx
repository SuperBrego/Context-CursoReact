import { createContext, useReducer } from "react";

interface TitleColorType {
    color: string;
    dispatch: (type: any) => void;
}

export const titleColorReducer = (state: any, action: any) => {
    // Switch
    switch(action.type) {
        case 'RED': return {... state, color: 'red'};
        case 'BLUE': return {... state, color: 'blue'};
        default: return state;
    }
}


export const TitleColorContext = createContext<TitleColorType | undefined>(undefined);

export const TitleColorContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(titleColorReducer, {color: 'purple'});

    return <TitleColorContext.Provider value={{...state, dispatch}}>
        {children}
    </TitleColorContext.Provider>
}