import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";



function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "August 15th at 11:30 am",
        reminder: true,
    },
    {
        id: 2,
        text: "Prescription Refill",
        day: "August 16th",
        reminder: true,
    },
    {
        id: 3,
        text: "Grocery Shopping",
        day: "August 17th at 2:00 pm",
        reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return <div className="container">
    <Header />
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks'}
  </div>
}

export default App;
