import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import About from "./About";


export default function Body() {
    return (
        <>
            <div className="bodycontainer">
                <div className="banner">
                    <div className="text">
                        <h1>John Doe</h1>
                    </div>
                    <div className="bannerimages">
                        <div className="block"style={{display:'flex',flexDirection:'column'}}><img src="/images/hero-2.jpg" style={{ height: '280px' }} alt="" />
                         
                        <FontAwesomeIcon className="FontAwesomeIcon" icon = {faArrowDown} style={{height:'100px',color:'white'}}/>
                           <p style={{ width: '280px', color: 'white',marginTop:'0' }}>
                                Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                                Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit,
                                sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod.
                            </p>
                        </div>

                        <img src="/images/hero-1.jpg" style={{ height: '400px'}} alt="" />


                        <div className="inlineblock" style={{display:'flex',flexDirection:'column'}}>
                        <p style={{width:'280px',color:'white'}}>Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod.</p>
                         <FontAwesomeIcon className="FontAwesomeIcon" icon = {faArrowUp} style={{height:'100px', color:'white'}}/>
                        <img src="/images/hero-3.jpg" style={{height:'190px'}} alt="" />
                    </div>
                    </div>

                    
                </div>


            </div>
            <About/>
        </>
    )
}