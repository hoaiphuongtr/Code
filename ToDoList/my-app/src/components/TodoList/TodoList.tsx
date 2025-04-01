import TaskInput from '../TaskInput'
import styles from './todoList.module.scss'

import TaskList from '../TaskList'
import { ToDo } from '../../@types/todo.type'
import { useState } from 'react'
export default function TodoList() {
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [currentToDo, setCurrentToDo] = useState<ToDo | null>(null)
  const addToDo = (name: string) => {
    const newToDo: ToDo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setToDos((prevState) => [...prevState, newToDo])
  }
  const alreadyDoneTask = toDos.filter((toDo) => toDo.done)
  const notYetTask = toDos.filter((toDo) => !toDo.done)
  const handleToDo = (id: string, done: boolean) => {
    setToDos((prevState) =>
      prevState.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, done }
        }
        return toDo
      })
    )
  }
  const startToDo = (id: string) => {
    const findedToDo = toDos.find((todo) => todo.id === id)
    if (findedToDo) {
      setCurrentToDo(findedToDo)
    }
  }
  const editToDo = (name: string) => {
    setCurrentToDo((prevState) => {
      if (prevState) return { ...prevState, name }
      return null
    })
  }
  const finishEditToDo = () => {
    setToDos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === (currentToDo as ToDo).id) {
          return currentToDo as ToDo
        }
        //if (todo.id === currentToDo?.id){
        // return currentToDo;
        //}
        return todo
      })
    )
    setCurrentToDo(null)
  }
  return (
    <div className={styles.toDoList}>
      <div className={styles.container}>
        <TaskInput addToDo={addToDo} currentToDo={currentToDo} editToDo={editToDo} finishEditToDo={finishEditToDo} />
        <TaskList todos={notYetTask} handleToDo={handleToDo} startToDo={startToDo} />
        <TaskList doneTaskList todos={alreadyDoneTask} handleToDo={handleToDo} startToDo={startToDo} />
      </div>
    </div>
  )
}
