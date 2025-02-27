import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Finish uploading my code onto Github', 
        day: 'July 24 @6:30 pm', 
        reminder: true, 
    }, 
    {
        id: 2, 
        text: 'Pick my sister up from the airport', 
        day: 'August 10 @2:00pm', 
        reminder: true, 
    }, 
    {
        id: 3, 
        text: 'Grocery Shopping', 
        day: 'August 26 @11:30am', 
        reminder: false,
    },
])

//Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random() *1000) + 1
  
  const newTask = {id, ... task}
  setTasks([...tasks, newTask])
}


//Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
  id))
}

//Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ... task, reminder: 
        !task.reminder } : task
      )
    )
}

  return (
    <div className='container'>
      <Header onAdd = {() => setShowAddTask
      (!showAddTask)} 
      showAdd = {showAddTask}
      />
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} onDelete = 
        {deleteTask} onToggle = {toggleReminder} /> 
      ) : ('No Tasks To Show'
      )}
    </div>
  )
}


export default App
