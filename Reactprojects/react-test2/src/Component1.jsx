import Component2 from "./Component2"

export default function Component1(){
    const students = [
        {
        rollno:'2233616',
        name:'Anubhav',
        subject:{
            English:'86',
            Maths:'98',
            Physics:'90',
            Chemistry:'85',
        }
    },

     {
        rollno:'2233617',
        name:'Ankush',
        subject:{
            English:'86',
            Maths:'98',
            Physics:'90',
            Chemistry:'85',
        }
    },

     {
        rollno:'2233618',
        name:'Jaspreet',
        subject:{
            English:'76',
            Maths:'68',
            Physics:'60',
            Chemistry:'75',
        }
    },


         {
        rollno:'2233619',
        name:'Jaskirat',
        subject:{
            English:'70',
            Maths:'58',
            Physics:'68',
            Chemistry:'65',
        }
    },

         {
        rollno:'2233620',
        name:'Seerat',
        subject:{
            English:'66',
            Maths:'50',
            Physics:'55',
            Chemistry:'65',
        }
    }

]
    return(
        <>
        
        <Component2 data={students}/>
        </>
    )
}