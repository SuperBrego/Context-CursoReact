import { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

export default function useCounterContext() {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error("useContext(CounterContext) must be used within a CounterContextProvider");
    }

    return context;
}