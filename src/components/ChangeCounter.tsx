import useCounterContext from "../hooks/useCounterContex";

export default function ChangeCounter() {
    const { counter, setCounter } = useCounterContext();

    return <>
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
    </div>
    </>
}