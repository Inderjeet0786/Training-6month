import { useContext } from "react"
import { data1,data2 } from "./App"

export default function Third(){
        var name = useContext(data1)
        var studata = useContext(data2)
        console.log("student data is",studata);
        
    return(
        <>
                <h1>This is Third com and student name is {name}</h1>
                <h2>Student name is {studata?.name} and rollno is {studata?.rollno}</h2>
        </>

    )
}