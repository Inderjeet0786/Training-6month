import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    return (
        <>
            <div className="container">
                <div className="icon" style={{fontFamily:'Emblema One'}}>
                    CHEFER
                </div>
                <div className="right-side">
                    <div className="topbar">
                        <p> <FontAwesomeIcon icon={faEnvelope}  style={{color:"orangered"}}/> info@gmail.com</p>
                        <p>    <FontAwesomeIcon icon={faPhone}  style={{color:'orangered'}} /> +91 9056789447</p>
                    </div>

                    <div className="nav">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>

                            <li>
                                <a href="">About</a>
                            </li>

                            <li>
                                <a href="">Menu</a>
                            </li>

                            <li>
                                <a href="">Menu</a>
                            </li>

                            {/* <li className="dropdown">
                                <a href="">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Page 1</a></li>
                                    <li><a href="#">Page 2</a></li>
                                    <li><a href="#">Page 3</a></li>
                                </ul>
                            </li> */}

                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}