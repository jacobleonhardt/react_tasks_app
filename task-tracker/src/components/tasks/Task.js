import './task.scss'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

  return (
    <div key={task.id} className={`list__task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}  <FaTimes onClick={() => onDelete(task.id)} /></h3>
      <h4>{task.day} @ {task.time}</h4>
    </div>
  )
}

export default Task
