import Second from "./Second"

export default function First(){
    let Student = {
        name:"Amit Kumar",
        contact:"9985586960",
        FatherName:"Abhinav Sharma",
        MotherName:"Anjali Kumari",
        Class:"10th"
        
    }
    return(
        <>
        <Second data ={Student}/>
        </>
    )
}