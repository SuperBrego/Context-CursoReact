import { createContext, useState } from "react";

interface CounterContextType {
    counter: number;
    setCounter: any;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Criar Provider
export const CounterContextProvider = ({ children }: any) => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}