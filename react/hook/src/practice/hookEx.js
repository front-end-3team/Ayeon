import { useRef, useState } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    const colorChange = useRef();

    const onPlusBtn = () => {
        setCount(count + 1);
    };

    const onMinusBtn = () => {
        setCount(count - 1);
    };

    if (count > 0) {
        colorChange.current.style.color = 'red';
    }

    if (count < 0) {
        colorChange.current.style.color = 'green';
    }

    return (
        <>
            <button onClick={onPlusBtn}>+</button>
            <p ref={colorChange}>{count}</p>
            <button onClick={onMinusBtn}>-</button>
        </>
    );
}

export default Hooks;
