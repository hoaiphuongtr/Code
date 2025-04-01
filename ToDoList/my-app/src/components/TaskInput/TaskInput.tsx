import { useState } from 'react'
import styles from './taskInput.module.scss'
import { ToDo } from '../../@types/todo.type'
interface TaskInputProps {
  addToDo: (name: string) => void
  currentToDo: ToDo | null
  editToDo: (name: string) => void
  finishEditToDo: () => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addToDo, currentToDo, editToDo, finishEditToDo } = props
  const [name, setName] = useState<string>('')
  const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentToDo) {
      finishEditToDo()
      if (name) setName('')
    } else addToDo(name)
    setName('')
  }
  const handelChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (currentToDo) {
      editToDo(value)
    } else {
      setName(value)
    }
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To Do List Typescript</h1>
      <form className={styles.form} onSubmit={handeSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentToDo ? currentToDo.name : name}
          onChange={handelChangeInput}
        />
        <button type='submit'> {currentToDo ? '☑️' : '➕'}</button>
      </form>
    </div>
  )
}
