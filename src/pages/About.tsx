import { ReactElement } from "react";
import useCounterContext from "../hooks/useCounterContex";

export default function About(): ReactElement {
    const { counter } = useCounterContext();

    return <>
    <div>
        <h1>Sobre</h1>
        <p>Contador: {counter}</p>
    </div>
    </>;
}