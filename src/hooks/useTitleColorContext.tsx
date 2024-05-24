import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContex";

export default function useTitleColorContext() {
    const context = useContext(TitleColorContext);

    if (!context) {
        throw new Error("useContext(CounterContext) must be used within a CounterContextProvider");
    }

    return context;
}