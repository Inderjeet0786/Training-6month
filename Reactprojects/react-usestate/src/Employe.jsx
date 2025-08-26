import React, { use, useState } from 'react'

function Employe() {
  // const [status,setstatus] = useState('Blocked')
  const [employees, setEmployee] = useState([
    { empid: 1, name: 'Ajay', salary: 38000, job: 'Accountant', deparment: 'HMCT', status: 'offline' },
    { empid: 2, name: 'Jugraj', salary: 45000, job: 'Developer', deparment: 'CSE', status: 'online' },
    { empid: 3, name: 'Arjun', salary: 4000, job: 'Manager', deparment: 'CSE', status: 'offline' },
    { empid: 4, name: 'Arun', salary: 44000, job: 'Developer', deparment: 'CSE', status: 'online' },
    { empid: 5, name: 'Simran', salary: 2000, job: 'HR', deparment: 'Management', status: 'offline' },
    { empid: 6, name: 'Neha', salary: 60000, job: 'Project Manager', deparment: 'IT', status: 'offline' },
    { empid: 7, name: 'Rohit', salary: 3000, job: 'Designer', deparment: 'UI/UX', status: 'offline' },
    { empid: 8, name: 'Pooja', salary: 42000, job: 'Data Analyst', deparment: 'Analytics', status: 'offline' },
    { empid: 9, name: 'Manish', salary: 28000, job: 'Support Engineer', deparment: 'Tech Support', status: 'offline' },
    { empid: 10, name: 'Karan', salary: 75000, job: 'Team Lead', deparment: 'IT', status: 'online' },
  ]);

//  function Changestatus(id){
//    setEmployee(prev=>{
//    return prev.map(emp=>{
//     return emp.empid ===id?
//     {...emp,status:emp.status==='online'?'offline':"online"}:emp;

//     })
//    })
//  }

   function changeStatus(id){

    setEmployee(pre=>{

      return pre.map(el=>{
        return el.empid===id?{...el,status:el.status==='online'?'offline':'online'}:el
        
      })
    })

   }
  

  return (
    <>
    {/* <table className='table table-bordered table-hover text-center allign-middle' >
        <tr>
            <th>Empid</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Job</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
       {employees.map((employee,index)=>(
         <tr key={index}>
            <td>{employee.empid}</td>
            <td>{employee.name}</td>
            <td>{employee.salary}</td>
            <td>{employee.job}</td>
            <td>{employee.deparment}</td>
            <td><span className={`badge ${employee.salary>4000?"text-bg-success":"text-bg-danger"}`}>{employee.salary>4000?"Online":"Offline"}</span></td>
            <td ><button type="button" class={`${employee.status=='offline'? 'btn btn-danger bg bg-danger':'btn btn-primary bg bg-success'}`}onClick={() => Changestatus(employee.empid)}
>
              {employee.status}</button></td>
        </tr>
       
       ))}
        
       
    </table> */}


    {/* <table className=' table table-hover text-center allign-middle'>
      <tr>
        <th>Empid</th>
        <th>Ename</th>
        <th>Salary</th>
        <th>Job</th>
        <th>Department</th>
        <th>Action</th>
        <th>Status</th>
        <th>Blocked</th>
      </tr>

      {employees.map((el,index)=>{
        return(
          <tr>
            <td>{el.empid}</td>
            <td>{el.name}</td>
            <td>{el.salary}</td>
            <td>{el.job}</td>
            <td>{el.deparment}</td>
            <td><span className={` ${el.status=='online'?'badge text-bg-success':'badge text-bg-danger'}`} type='button'  onClick={()=>{
          
             setEmployee(prev=>{
             return prev.map(emp=>{
                return emp.empid===el.empid?
                {...emp,status:el.status=='online'?'offline':'online'}:emp;
              })
             })


            }}    >{el.status}</span></td>
            <td><button type='button' className='btn btn-danger bg bg-success' onClick={()=>{
              
            }}>{status}setstatus></td>

            <td className={` btn  ${status setstatusked'?'bg bg-danger':'bg bg-success'}`} onClick={()=>{
              setBlock( prev=>{

                prev.map(emp=>{
                  return 
                })

              })
            }}>{statussetstatus        </tr>
        )
      })}
    </table> */}
    
   
   <table className=' table table-hover text-center allign-middle '>
    <thead>
      <tr>
        <th>
          Emp Id
        </th>

        <th>
          Emp Name
        </th>

        <th>
          Job
        </th>

        <th>
          Salary
        </th>

        <th>
          Department
        </th>

        <th>
          Status
        </th>
      </tr>

      {employees.map(el=>{
        return(
          <tr key ={ el.id}>
            <td>{el.empid}</td>
            <td>{el.name}</td>
            <td>{el.job}</td>
            <td>{el.salary}</td>
            <td>{el.deparment}</td>
            <td className={` btn ${el.status==='offline'?'bg bg-danger':'bg bg-success'}` } onClick={ ()=> changeStatus(el.empid)}>{el.status}</td>
          </tr>
        
      )})}
    </thead>
   </table>


    
    </>
  )
}

export default Employe
