import './App.scss';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Doctor's Appointment",
    day: "Feb 5th",
    time: "2:30 PM",
    reminder: true,
  }])

  return (
    <div className="container">
      <Header />
      <Tasks list={tasks} />
    </div>
  );
}

export default App;
