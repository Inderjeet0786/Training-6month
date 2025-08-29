import { useState } from "react";
import useTask from "./Task";

function Todo() {
  const { task, setTask, tasks, addTask,updateTask } =useTask()
  const [Taskindex,setTaskIndex] = useState(null)
  const [Taskvalue,setTaskValue] = useState('')

  const updatevalue = (index,value)=>{
    setTaskIndex(index);
    setTaskValue(value)
  }
  
  updateTask()


  return (
    <div style={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <div className="input">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          style={{width:'200px'}} 
          placeholder="Enter a task"
        />
      </div>
      
      
      <div className="add" style={{marginTop:'10px'}}>
        <button onClick={addTask}>Add</button>
      </div>

      <div className="container" style={{border:'3px solid green',marginTop:'10px' }}>
       
        {tasks.map((t, index) => (
            <div style={{padding:'30px', display:'flex',gap:'10px'}}>
            <input key={index} style={{width:'150px'}} value={t}/>
            <button onClick={updatevalue}>Update</button>
            <button>Toggle</button>
            </div>
          
        ))}
      </div>
      </div>
      

    
 
  );
}

export default Todo;

