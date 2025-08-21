import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


export default function Master() {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>

            </div>



        </>
    )
}