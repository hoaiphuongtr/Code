import { useEffect, useRef, useState } from 'react';

function WatchTimer() {
    const [seconds, setSeconds] = useState<number>(0);
    const intervalRef = useRef<any>(null);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            console.log('Interval is running');
            setSeconds((prevState) => prevState + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
            console.log('Watch is unmounted');
        };
    }, []);
    return <div>Watch : {seconds}</div>;
}
export default function Watch() {
    const [visible, setVisible] = useState<boolean>(true);
    return (
        <>
            {visible && <WatchTimer />}
            <button
                onClick={() => {
                    setVisible((prev) => !prev);
                }}
            >
                Set Visible Watch
            </button>
        </>
    );
}
