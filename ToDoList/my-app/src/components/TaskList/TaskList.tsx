import { ToDo } from '../../@types/todo.type'
import styles from './taskList.module.scss'

interface TaskListProps {
  doneTaskList?: boolean
  todos: ToDo[]
  handleToDo: (id: string, done: boolean) => void
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleToDo } = props
  const onChangeCheckbox = (idToDo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleToDo(idToDo, event.target.checked)
  }
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={onChangeCheckbox(todo.id)}
            />
            <span
              className={`${styles.taskName}
                    ${todo.done ? styles.taskNameDone : ''}`}
            >
              {todo.name}
            </span>
            <div className={styles.taskAction}>
              <button className={styles.taskBtn}>🖋️</button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
