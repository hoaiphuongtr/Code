import { useReducer, useMemo, useCallback } from 'react';
import styles from './taskInput.module.scss';
import { ToDo } from '../../@types/todo.type';
import connect from '../HigherOrderComponent/connect';
import { debug, log } from '../HigherOrderComponent/constants';
import Title from '../Title';

interface TaskInputProps {
    addToDo: (name: string) => void;
    currentToDo: ToDo | null;
    editToDo: (name: string) => void;
    finishEditToDo: () => void;
}

interface State {
    name: string;
}

type Action = { type: 'SET_NAME'; name: string } | { type: 'CLEAR_NAME' };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.name };
        case 'CLEAR_NAME':
            return { ...state, name: '' };
        default:
            return state;
    }
};

function TaskInput(props: TaskInputProps & typeof injectedProps) {
    const { addToDo, currentToDo, editToDo, finishEditToDo } = props;

    const [state, dispatch] = useReducer(reducer, {
        name: currentToDo ? currentToDo.name : ''
    });

    const address = useMemo(() => {
        return {
            street: '215 Do Xuan Hop, PLB, Q9'
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentToDo) {
            finishEditToDo(); // Khi chỉnh sửa xong thì gọi finishEditToDo
            dispatch({ type: 'CLEAR_NAME' });
        } else {
            addToDo(state.name);
            dispatch({ type: 'CLEAR_NAME' });
        }
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (currentToDo) {
            // Cập nhật currentToDo name khi người dùng nhập liệu
            editToDo(value);
        } else {
            dispatch({ type: 'SET_NAME', name: value });
        }
    };

    return (
        <div className='mb-2'>
            <Title address={address} handleChangeTitle={() => {}} />
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='caption goes here'
                    value={currentToDo ? currentToDo.name : state.name}
                    onChange={handleChangeInput}
                />
                <button type='submit'> {currentToDo ? '☑️' : '➕'}</button>
            </form>
        </div>
    );
}

const injectedProps = { debug, log };

export default connect(injectedProps)(TaskInput);
