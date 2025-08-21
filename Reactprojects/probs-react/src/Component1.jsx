import Component2 from "./Component2"

export default function Component1(){
    const student = [
        {
            id:'1',
            name:'Inderjeet',
            status:'online'
        },
        {   
            
            id:'2',
            name:'Amit',
            status:'online'

        },

        {
            
            id:'3',
            name:'Anuj',
            status:'offline'
        },

        {
            
            id:'4',
            name:'Ajay',
            status:'online'
        },

        {
            
            id:'5',
            name:'Deepak',
            status:'offline'
        },

        {
            
            id:'6',
            name:'Vijay',
            status:'offline'
        }
    ]
    return(
        <>

        <Component2 data={student}/>
       
        </>
    )
}