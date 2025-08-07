export default function Third(probs) {
    let students = probs.data
    console.log(students);

    let failedstudents = probs.data.filter((student)=> student.marks<33)

    return (
        <>
            <table border={'1'} width={'500px'} style={{margin:'70px auto 0 auto'}}>
                <thead>
                    <th>

                        Sno
                    </th>
                    <th>
                        Name
                    </th>

                    <th>
                        Roll No
                    </th>

                    <th>
                        Fathers Name
                    </th>

                    <th>
                        Mothers Name
                    </th>

                    <th>Marks</th>

                </thead>

                <tbody>
                    {students.map((el, index) => (

                        <tr>
                            <td>{index + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.Rollno}</td>
                            <td>{el.FatherName}</td>
                           <td>{el.MotherName}</td>
                           <td>{el.marks}</td>
                            
                        </tr>

                    ))

                    }
                </tbody>
            </table>


            <h3 style={{marginTop:'30px'}}>Fail Students Data:</h3>



            <table border={'1'} width={'500px'} style={{margin:'70px auto 0 auto'}}>
                <thead>
                    <th>

                        Sno
                    </th>
                    <th>
                        Name
                    </th>

                    <th>
                        Roll No
                    </th>

                    <th>
                        Fathers Name
                    </th>

                    <th>
                        Mothers Name
                    </th>

                    <th>Marks</th>

                </thead>

                <tbody>
                    {failedstudents.map((el, index) => (

                        <tr>
                            <td>{index + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.Rollno}</td>
                            <td>{el.FatherName}</td>
                           <td>{el.MotherName}</td>
                           <td>{el.marks}</td>
                            
                        </tr>

                    ))

                    }
                </tbody>
            </table>

        </>
    )
}


{/* <ul>
  {students.map((el, index) => (
    <li key={index}>
      {index}: {el.name}
    </li>
  ))}
</ul> */}
