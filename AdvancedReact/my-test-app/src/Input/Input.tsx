import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
} from 'react';

const AutoInput = forwardRef<{ type: () => void }>((props, ref) => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const type = () => {
        let numberIndex = 0;
        const initialString = 'Tran Hoai Phuong';
        inputRef.current?.focus();
        let interval: any = setInterval(() => {
            setValue(initialString.slice(0, numberIndex));
            if (numberIndex === initialString.length) {
                return clearInterval(interval);
            }
            numberIndex++;
        }, 100);
    };

    useImperativeHandle(ref, () => {
        return { type };
    });
    return (
        <input
            type='text'
            placeholder='Type something'
            value={value}
            onChange={() => {}}
            ref={inputRef}
        ></input>
    );
});
export default function Input() {
    const funcInputRef = useRef<{ type: () => void }>({ type: () => {} });
    const handleClick = () => {
        funcInputRef.current.type();
    };

    return (
        <div className='input'>
            <button onClick={handleClick}>Click here to type</button>
            <AutoInput ref={funcInputRef} />
        </div>
    );
}
