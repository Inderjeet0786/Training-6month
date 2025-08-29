import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

export default function Master(){
    return(
        <>
                <Header/>
                 <ToastContainer/>
                <Outlet/>
                <Footer/>
        </>
    )
}