import PageHeader from "../PageHeader";
import UseCounter from "./UseCounter";
export default function Counter(){
    var[count,incfun,decFun]=UseCounter()
    return(
        <>
        <PageHeader child={"Counter page"}></PageHeader>
        <button onClick={incfun}>+++</button>
        <h1>{count}</h1>
        <button onClick={decFun}>---</button>
        </>
    )
}