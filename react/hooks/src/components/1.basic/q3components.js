import { useEffect } from 'react';

function Q3components({ setNum }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setNum((num) => num + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
            setNum(0);
        };
    }, []);

    return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}

export default Q3components;
