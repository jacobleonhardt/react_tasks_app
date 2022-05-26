import Task from "./Task"

const Tasks = ({ list }) => {

  return (
    <div className="list">
      { list.map(item => {
        return <Task task={item}/>
      }) }
    </div>
  )
}

export default Tasks
