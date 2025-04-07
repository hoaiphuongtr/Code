import { useReducer } from 'react';
type ActionType =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'increment_x_age'; payload: number }
    | { type: 'decrement_x_age'; payload: number };

const initArg = {
    count: 0
};
const increaseAgeAction = () => {
    return { type: 'increment' } as { type: 'increment' };
};
const decreaseAgeAction = () => {
    return { type: 'decrement' } as { type: 'decrement' };
};
const increaseXAgeAction = (payload: number) => {
    return { type: 'increment_x_age', payload } as {
        type: 'increment_x_age';
        payload: number;
    };
};
const decreaseXAgeAction = (payload: number) => {
    return { type: 'decrement_x_age', payload } as {
        type: 'decrement_x_age';
        payload: number;
    };
};
const reducer = (state: typeof initArg, action: ActionType) => {
    if (action.type === 'increment') {
        return { ...state, count: state.count + 1 };
    } else if (action.type === 'decrement') {
        return { ...state, count: state.count - 1 };
    } else if (action.type === 'increment_x_age') {
        return { ...state, count: state.count + action.payload };
    } else if (action.type === 'decrement_x_age') {
        return { ...state, count: state.count - action.payload };
    } else {
        throw new Error('Unknown action type');
    }
};
const log = () => {
    return (state: typeof initArg, action: ActionType) => {
        console.group(action.type);
        console.log('prev state', state);
        const nextState = reducer(state, action);
        console.log('next state', nextState);
        console.groupEnd();
        return nextState;
    };
};
const init = (arg: typeof initArg) => {
    return { ...arg, count: arg.count + 4 };
};
export default function Count() {
    // const [count, setCount] = useState(0);
    const [state, dispach] = useReducer(log(), initArg, init);
    const increaseCount = () => {
        dispach(increaseAgeAction());
    };
    const decreaseCount = () => {
        dispach(decreaseAgeAction());
    };
    const increaseXAge = (payload: number) => {
        dispach(increaseXAgeAction(payload));
    };
    const decreaseXAge = (payload: number) => {
        dispach(decreaseXAgeAction(payload));
    };
    return (
        <div>
            Count : {state.count}
            <button onClick={increaseCount} style={{ color: 'red' }}>
                Increase Num
            </button>
            <button onClick={decreaseCount} style={{ color: 'green' }}>
                Decrease Num
            </button>
            <button onClick={() => increaseXAge(3)} style={{ color: 'blue' }}>
                Increase X Age
            </button>
            <button onClick={() => decreaseXAge(3)} style={{ color: 'black' }}>
                Decrease X Age
            </button>
        </div>
    );
}
