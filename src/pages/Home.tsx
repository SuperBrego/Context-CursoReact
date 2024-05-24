import { ReactElement } from "react";
import ChangeCounter from "../components/ChangeCounter";
import useCounterContext from "../hooks/useCounterContex";
import useTitleColorContext from "../hooks/useTitleColorContext";

export default function Home(): ReactElement {
    const { counter } = useCounterContext();

    // Cores
    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color: string) => {
        dispatch({type: color});
    }

    return <>
    <div>
        <h1 style={{ color: color }}>Home</h1>
        <p>Valor do meu contador é {counter}</p>
        <ChangeCounter />
        <div>
            <button onClick={() => setTitleColor('RED')}>Vermelho</button>
            <button onClick={() => setTitleColor('BLUE')}>Azul</button>
        </div>
    </div>
    </>;
}