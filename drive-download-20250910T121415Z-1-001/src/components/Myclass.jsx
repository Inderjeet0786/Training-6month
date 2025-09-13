import { Component } from "react"
export default class Myclass extends Component{
      constructor(){
    //    states
            super()
            this.state = {
                count:10
            }

        }
       
        render(){ 
            // functions 
            const incFun = ()=>{
            console.log("inc fun call");
            this.setState({count:this.state.count+1})
            
        }
        // function incFun(){
        //     this.setState({count:this.state.count+1})
        // }
            return(
                <>
                    {/* jsx */}
                    <h1>Count is {this.state.count}</h1>
                    <button onClick={incFun}>++++</button>
                </>
            )
        }
}
