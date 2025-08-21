import { Outlet } from "react-router-dom";
import Adminfooter from "./Adminfooter";
import Adminnabar from "./Adminnavbar";

export default function Adminmaster(){
    return(
        <>
        <Adminnabar/>
        <Outlet/>
        <Adminfooter/>
        </>
    )
}