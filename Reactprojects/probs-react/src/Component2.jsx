export default function Component2(props) {
    console.log(props.data);
    const students = props.data

    return (
        <>
            <h2>Student List On the basis of status:</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Color</th>

                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=>(
                        <tr  >
                        <td>
                            {student.id}
                        </td>
                        <td> {student.name}</td>
                        <td>{student.status}</td> 
                        <td style={{backgroundColor:student.status=='online'?'green':'red'}}></td>   
                           
                        
                    </tr>
                       
                    )
                    )}
                    
                </tbody>
            </table>


        </>
    )
}