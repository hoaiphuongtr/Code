import { useState } from 'react'
import styles from './taskInput.module.scss'
interface TaskInputProps {
  addToDo: (name: string) => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addToDo } = props
  const [name, setName] = useState<string>('')
  const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addToDo(name)
    setName('')
  }
  const handelChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setName(value)
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To Do List Typescript</h1>
      <form className={styles.form} onSubmit={handeSubmit}>
        <input type='text' placeholder='caption goes here' value={name} onChange={handelChangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
