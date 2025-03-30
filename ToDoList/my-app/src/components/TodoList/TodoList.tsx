import TaskInput from '../TaskInput'
import styles from './todoList.module.scss'

import TaskList from '../TaskList'
export default function TodoList() {
  return (
    <div className={styles.toDoList}>
      <div className={styles.container}>
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList />
      </div>
    </div>
  )
}
