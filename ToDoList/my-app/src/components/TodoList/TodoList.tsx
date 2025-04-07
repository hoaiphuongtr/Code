import { useEffect, useReducer } from 'react';
import TaskInput from '../TaskInput';
import styles from './todoList.module.scss';
import TaskList from '../TaskList';
import { ToDo } from '../../@types/todo.type';
import { ActionType } from './Action/action';

const syncReactToLocalStorage = (toDos: ToDo[]) => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
};

interface State {
    toDos: ToDo[];
    currentToDo: ToDo | null;
}

const reducer = (state: State, action: ActionType): State => {
    switch (action.type) {
        case 'AddToDo': {
            const newToDo: ToDo = {
                name: action.payload,
                done: false,
                id: new Date().toISOString()
            };
            const updatedToDos = [...state.toDos, newToDo];
            syncReactToLocalStorage(updatedToDos);
            return { ...state, toDos: updatedToDos };
        }
        case 'CheckToDo': {
            const updatedToDos = state.toDos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, done: action.payload.done }
                    : todo
            );
            syncReactToLocalStorage(updatedToDos);
            return { ...state, toDos: updatedToDos };
        }
        case 'EditToDo': {
            // Tìm `todo` cần sửa
            const currentToDo = state.toDos.find(
                (todo) => todo.id === action.payload
            );
            return {
                ...state,
                currentToDo: currentToDo || null
            };
        }
        case 'FinishEditToDo': {
            if (!state.currentToDo) return state;

            const updatedToDos = state.toDos.map((todo) => {
                const idCurrentToDo = (state.currentToDo as ToDo).id;
                if (todo.id === idCurrentToDo) {
                    return { ...todo, name: (state.currentToDo as ToDo).name };
                }
                return todo;
            });

            syncReactToLocalStorage(updatedToDos);
            return { ...state, toDos: updatedToDos, currentToDo: null };
        }
        case 'DeleteToDo': {
            const updatedToDos = state.toDos.filter(
                (todo) => todo.id !== action.payload
            );
            syncReactToLocalStorage(updatedToDos);
            return {
                ...state,
                toDos: updatedToDos,
                currentToDo:
                    state.currentToDo?.id === action.payload
                        ? null
                        : state.currentToDo
            };
        }
        default:
            return state;
    }
};

const initialArg = {
    toDos: JSON.parse(localStorage.getItem('toDos') || '[]'),
    currentToDo: null
};

export default function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialArg);
    const addToDo = (name: string) => {
        dispatch({ type: 'AddToDo', payload: name });
    };
    const editToDo = (name: string) => {
        dispatch({ type: 'EditToDo', payload: name });
    };
    const deleteToDo = (id: string) => {
        dispatch({ type: 'DeleteToDo', payload: id });
    };
    const finishEditToDo = () => {
        dispatch({ type: 'FinishEditToDo' });
    };
    const checkToDo = (id: string, done: boolean) => {
        dispatch({ type: 'CheckToDo', payload: { id, done } });
    };
    return (
        <div className={styles.toDoList}>
            <div className={styles.container}>
                <TaskInput
                    addToDo={addToDo}
                    currentToDo={state.currentToDo}
                    editToDo={editToDo}
                    finishEditToDo={finishEditToDo}
                />
                <TaskList
                    todos={state.toDos.filter((toDo) => !toDo.done)}
                    handleToDo={checkToDo}
                    startToDo={editToDo}
                    deleteToDo={deleteToDo}
                />
                <TaskList
                    doneTaskList
                    todos={state.toDos.filter((toDo) => toDo.done)}
                    handleToDo={checkToDo}
                    startToDo={editToDo}
                    deleteToDo={deleteToDo}
                />
            </div>
        </div>
    );
}
