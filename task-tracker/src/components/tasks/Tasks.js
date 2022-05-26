import Task from "./Task"

const Tasks = ({ list, onDelete, onToggle }) => {

  return (
    <div className="list">
      { list.map(item => {
        return <Task task={item} onDelete={onDelete} onToggle={onToggle} />
      }) }
    </div>
  )
}

export default Tasks
