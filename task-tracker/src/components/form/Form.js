import { useState } from "react"

const Form = ({ onAdd }) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert("Please add a task.")
      return
    }

    onAdd({ text, day, time, reminder })

    setText('')
    setDay('')
    setTime('')
    setReminder(false)
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form__field--text'>
        <label>Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className='form__field--text'>
        <label>Day</label>
        <input type="text" placeholder='Add Day' value={day} onChange={e => setDay(e.target.value)} />
      </div>
      <div className='form__field--text'>
        <label>Time</label>
        <input type="text" placeholder='Add Time' value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div className='form__field--checkbox'>
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
      </div>
      <div className='form__field--submit'>
        <input type="submit" value="Add Task" />
      </div>
    </form>
  )
}

export default Form
