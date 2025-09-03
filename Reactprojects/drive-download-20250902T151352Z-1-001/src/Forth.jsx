import Third from "./Third";
import { data1 } from "./App";
import { useContext } from "react";
export default function Forth(){
    var recitems = useContext(data1);
    console.log("in forth com",recitems.items.item);
    var data = recitems.items.item;
    let donutdata = data.filter((el)=>{if(el.type == "donut"){return el}})
        console.log("donut data",donutdata);
    
        
    return(
        <> 
                <h1>This is Forth com</h1>
                <h1>Donut</h1>
                <div className="container">
                    <div className="row">
                        {
                            donutdata?.map((el,index)=>(
                                <>
                                <div className="col-md-4">
                                    <div class="card" style={{width: "18rem"}}>
                                        <img src={el.image} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{el.name}</h5>
                                            <p class="card-text">
                                                <ul>
                                                {el.topping.map((singletoping)=>(
                                                    <>
                                                            <li>{singletoping.type}</li>    
                                                    </>
                                                ))}

                                                </ul>
                                            </p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                        </div>
                                </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                
        </>

    )
}