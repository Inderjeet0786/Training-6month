import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <>
            <div className="footercontainer">
                <div className="headings">
                    <div className=" heading1">
                        <h1>Get In Touch</h1>
                        {/* <h1>Quick Links</h1>
                <h1>More Links</h1> */}
                        <p>
                            123 Street, New York, USA
                        </p>
                        <p>
                            info@example.com
                        </p>
                        <p>

                            +012 345 67890
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} /> info@gmail.com
                        </p>

                        <p>
                            <FontAwesomeIcon icon={faPhone} /> +91 9056789447
                        </p>

                    </div>
                    <div className="heading1">
                        <h1>Quick Links</h1>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Food Menu</p>
                        <p>Our Chefs</p>
                        <p>Latest Blog</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="heading1">
                        <h1>More Links</h1>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Food Menu</p>
                        <p>Our Chefs</p>
                        <p>Latest Blog</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </>
    )
}