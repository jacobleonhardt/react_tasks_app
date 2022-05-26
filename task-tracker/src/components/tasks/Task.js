const Task = ({ task }) => {
  return (
    <div className="list__task">
      <h3 key={task.id}>{task.text}</h3>
      <h4>{task.day} @ {task.time}</h4>
    </div>
  )
}

export default Task
