export default function About() {
    return (
        <>
            <div className="aboutcontainer" style={{ marginTop: '40px', display: 'flex' }}>
                <div className="Aboutimages" style={{flex:1}}>
                    <img className="animate" src="/images/about-round.jpg" alt="" style={{ position: 'absolute', marginTop: '0px', zIndex: '-1' }} />
                    <img src="/images/about.jpg" alt=""
                        style={{ margin: '10px', borderTopLeftRadius: '300px', height: '600px' }} />
                </div>
                <div className="About" style={{ position: 'relative',flex:"2" }}>
                    <h5 style={{
                        fontSize: '20px', color: '#FB5B21', marginTop: '10px', lineHeight: '24px', letterSpacing: '8px', wordSpacing: '0px',
                        fontStyle: 'normal', marginLeft: '10px'
                    }}>About Us</h5>

                    <h1 style={{ fontFamily: 'Emblema One', fontSize: '64px' }}>Cooking Together <br />
                        With The Expert</h1>
                    <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '16px', lineHeight: '24px', margin: '0,0,24px' }}>
                        Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut.Tempor sit lorem sit <br />magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum.
                        <br />Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>

                    <div className="cards" style={{display:"flex", marginLeft:"100px"}}>
                        <div className="card1" style={{ border: "2px solid black", marginTop:"10px" }}>
                            <img src="/images/feature-1.png" alt="" style={{ borderRadius: "50%", backgroundColor: "#FB5B21", marginLeft: '10px' }} />
                            <h4 style={{ fontSize: '24px' }}>Master Chefs</h4>
                            <p  style={{textAlign:"start",lineHeight:"24px",letterSpacing:"normal"}}>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.</p>

                        </div>
                         <div className="card1" style={{ border: "2px solid black", marginTop:"10px" }}>
                            <img src="/images/feature-1.png" alt="" style={{ borderRadius: "50%", backgroundColor: "#FB5B21" }} />
                            <h4 style={{ fontSize: '24px' }}>Master Chefs</h4>
                            <p  style={{textAlign:"start",lineHeight:"24px",letterSpacing:"normal"}}>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.</p>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}