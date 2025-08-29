
import { useState } from "react";

function useTask() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task!=''){
      setTasks([...tasks, task]); 
      setTask("");
    }
  };

   const updateTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };


  return { task, setTask, tasks, addTask,updateTask };
}

export default useTask;
