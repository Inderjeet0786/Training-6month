


function Component2(props) {
    let students = props.data;
    // console.log(Object.values(students[0].subject)).map(Number);
    // .map(Number) converts string to number
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-12 "></div>
                {students.map((student) => {
                    // calculate avg for each student
                    const marks = Object.values(student.subject).map(Number)
                    const total = marks.reduce((acc, curr) => acc + curr, 0)
                    const avg = (total / marks.length).toFixed(2)
                    return (
                        <div className="col" style={{ marginTop: '20px', marginBottom: '20px' }} key={student.rollno}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://media.istockphoto.com/id/1407633532/vector/forget-password-icon-account-protection-security-key-danger-warning-wrong-password-design.jpg?b=1&s=170667a&w=0&k=20&c=L_jCkWdnPHX-2UjQGF6qQwR-AMCMrh7wbN0t76PzbVk="
                                    className="card-img-top"
                                    alt={student.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Student Details</h5>
                                    <p className="card-text">
                                        Avg marks of student across all subjects.
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Roll No: {student.rollno}</li>
                                    <li className="list-group-item">Name: {student.name}</li>
                                    <li className="list-group-item">Average Marks: {avg}%</li>
                                </ul>
                                <div className="card-body">
                                    <a href="../src/Component3.jsx" className="card-link">Profile</a>
                                    <a href="#" className="card-link">Detail Marks Card</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Component2;
