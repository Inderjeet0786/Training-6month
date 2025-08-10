import Third from "./Third"

export default function Second(probs) {
    let student = probs.data
    console.log("single data",student);
    
    let Students = [
        {
            name: "Amit Kumar",
            contact: "9985586960",
            marks: 85,
            FatherName: "Abhinav Sharma",
            MotherName: "Anjali Kumari",
            Class: "10th",
            Rollno:21,
        },

        {
            name: "Arjun",
            contact: "9985586960",
            marks: 85,
            FatherName: "Arayan Sharma",
            MotherName: "Anita Kumari",
            Class: "11th",
            Rollno:22,
        },
        {
            name: "Deepak",
            contact: "9914437186",
            marks:70,
            FatherName: "Shiv",
            MotherName: "Gauri",
            Class: "12th",
            Rollno:23,
        },

        {
            name: "Inder",
            contact: "6280304996",
            marks:80,
            FatherName: "Gurmeet Singh",
            MotherName: "Simran Kaur",
            Class: "12th",
            Rollno:24,
        },

         {
            name: "Divya",
            contact: "6280304996",
            marks:30,
            FatherName: "Gurmeet Singh",
            MotherName: "Simran Kaur",
            Class: "12th",
            Rollno:24,
        }

    ]

    return (
        <>
            <div className="container">
                <form action="">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" value={student.name} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fathername">Father Name:</label>
                            <input type="text" value={student.FatherName} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mothername">Mother Name:</label>
                            <input type="text" value={student.MotherName} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact">Mobile No:</label>
                            <input type="text" value={student.contact} readOnly />
                        </div>
                    </div>
                </form>
            </div>
            <Third data={Students}/>


        </>
    )
}