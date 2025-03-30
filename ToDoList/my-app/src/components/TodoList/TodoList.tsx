import TaskInput from '../TaskInput'
import styles from './todoList.module.scss'

import TaskList from '../TaskList'
import { ToDo } from '../../@types/todo.type'
import { useState } from 'react'
export default function TodoList() {
  const [toDos, setToDos] = useState<ToDo[]>([])

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
  return (
    <div className={styles.toDoList}>
      <div className={styles.container}>
        <TaskInput addToDo={addToDo} />
        <TaskList todos={notYetTask} handleToDo={handleToDo} />
        <TaskList doneTaskList todos={alreadyDoneTask} handleToDo={handleToDo} />
      </div>
    </div>
  )
}
