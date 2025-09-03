import Third from "./Third";

import { data1 } from "./App";
import { useContext } from "react";
export default function Second(){
    var name = useContext(data1);
    return(
        <>
                <h1>This is Second com    {name}</h1>
                
                <Third/>
        </>

    )
}