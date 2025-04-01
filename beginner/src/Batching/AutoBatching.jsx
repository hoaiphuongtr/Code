import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
export default function AutoBatching() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    // function handleChange() {
    //     setCount((prevState) => prevState + 1);
    //     setFlag((flag) => !flag);
    // }
    // console.log('render'); //React will only re-render once at the end (that's batching)
    useEffect(() => {
        setTimeout(() => {
            flushSync(() => {
                setCount((c) => c + 1);
            });
            flushSync(() => {
                setFlag((f) => !f);
            });
        }, 1000);
    }, []);

    console.log('render');
    return (
        <div>
            <h1>AutoBatching</h1>
            <p>Count : {count}</p>
            <p>FLag : {flag ? 'true' : 'false'}</p>
            {/* <button onClick={handleChange}>Change State</button> */}
        </div>
    );
}
