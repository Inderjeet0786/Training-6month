import { useState } from "react";

function UseCounter(){
     var[count,setCount]=useState(0)
      function incfun(){
        setCount(count+1)
      }
      function decFun(){
        setCount(count-1)
      }
      return[count,incfun,decFun]
}
export default UseCounter;