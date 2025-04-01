import { useEffect, useState } from 'react';
import TaskInput from '../TaskInput';
import styles from './todoList.module.scss';
import TaskList from '../TaskList';
import { ToDo } from '../../@types/todo.type';

// interface handleNewToDos {
//     (toDoObj: ToDo[]): ToDo[];
// }
type handleNewToDos = (toDoObj: ToDo[]) => ToDo[];
const syncReactToLocalStorage = (handleNewToDos: handleNewToDos) => {
    const toDoString = localStorage.getItem('toDos');
    const toDoObj: ToDo[] = toDoString ? JSON.parse(toDoString) : [];
    const newToDoObj = handleNewToDos(toDoObj);
    localStorage.setItem('toDos', JSON.stringify(newToDoObj));
};

export default function TodoList() {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [currentToDo, setCurrentToDo] = useState<ToDo | null>(null);

    useEffect(() => {
        const toDoString = localStorage.getItem('toDos');
        const toDoObj: ToDo[] = toDoString ? JSON.parse(toDoString) : [];
        setToDos(toDoObj);
    }, []);

    const addToDo = (name: string) => {
        const newToDo: ToDo = {
            name,
            done: false,
            id: new Date().toISOString()
        };
        setToDos((prevState) => [...prevState, newToDo]);
        syncReactToLocalStorage((toDoObj: ToDo[]) => [...toDoObj, newToDo]);
    };
    const alreadyDoneTask = toDos.filter((toDo) => toDo.done);
    const notYetTask = toDos.filter((toDo) => !toDo.done);
    const handleToDo = (id: string, done: boolean) => {
        setToDos((prevState) =>
            prevState.map((toDo) => {
                if (toDo.id === id) {
                    return { ...toDo, done };
                }
                return toDo;
            })
        );
    };
    const startToDo = (id: string) => {
        const findedToDo = toDos.find((todo) => todo.id === id);
        if (findedToDo) {
            setCurrentToDo(findedToDo);
        }
    };
    const editToDo = (name: string) => {
        setCurrentToDo((prevState) => {
            if (prevState) return { ...prevState, name };
            return null;
        });
    };
    const finishEditToDo = () => {
        const handler = (toDoObj: ToDo[]) =>
            toDoObj.map((todo) => {
                if (todo.id === (currentToDo as ToDo).id) {
                    return currentToDo as ToDo;
                }
                //if (todo.id === currentToDo?.id){
                // return currentToDo;
                //}
                return todo;
            });
        setToDos(handler);
        setCurrentToDo(null);
        syncReactToLocalStorage(handler);
    };
    const deleteToDo = (id: string) => {
        if (currentToDo) {
            setCurrentToDo(null);
        }
        const handler = (toDoObj: ToDo[]) => {
            const result = [...toDoObj];
            const findedIndexToDo = toDoObj.findIndex((todo) => todo.id === id);
            if (findedIndexToDo !== -1) {
                result.splice(findedIndexToDo, 1);
                return result;
            }
            return toDoObj;
        };
        setToDos(handler);
        syncReactToLocalStorage(handler);
    };
    return (
        <div className={styles.toDoList}>
            <div className={styles.container}>
                <TaskInput
                    addToDo={addToDo}
                    currentToDo={currentToDo}
                    editToDo={editToDo}
                    finishEditToDo={finishEditToDo}
                />
                <TaskList
                    todos={notYetTask}
                    handleToDo={handleToDo}
                    startToDo={startToDo}
                    deleteToDo={deleteToDo}
                />
                <TaskList
                    doneTaskList
                    todos={alreadyDoneTask}
                    handleToDo={handleToDo}
                    startToDo={startToDo}
                    deleteToDo={deleteToDo}
                />
            </div>
        </div>
    );
}
