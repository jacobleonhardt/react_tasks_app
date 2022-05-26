import './App.scss';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Tasks from './components/tasks/Tasks';
import { useState, useEffect } from 'react'

function App() {

  const [toggleForm, setToggleForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskList = await fetchTasks()
      setTasks(taskList);
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const addNew = res.json()
    setTasks([...tasks, addNew])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    }
    )
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header displayForm={() => setToggleForm(!toggleForm)} displayButtonText={toggleForm}/>
      { toggleForm && <Form onAdd={addTask} displayForm={() => setToggleForm(false)} /> }
      { tasks.length > 0 ?
        <Tasks list={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : "No current tasks." }
    </div>
  );
}

export default App;
