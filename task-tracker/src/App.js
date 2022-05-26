import './App.scss';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react'

function App() {

  const [toggleForm, setToggleForm] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Doctor's Appointment",
    day: "Feb 5th",
    time: "2:30 PM",
    reminder: true,
  }])

  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header displayForm={() => setToggleForm(true)} />
      { toggleForm && <Form onAdd={addTask} displayForm={() => setToggleForm(false)} /> }
      { tasks.length > 0 ?
        <Tasks list={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : "No current tasks." }
    </div>
  );
}

export default App;
