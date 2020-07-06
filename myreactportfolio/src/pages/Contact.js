import React from 'react';

function Contact() {
    return(
        <div className="container" style={{ 
            marginTop: "50px", 
            border: "grey solid thin",
            borderRadius: "5px", 
            padding: "10px",
            backgroundColor:"white"}}>
            <h3>Contact Me</h3>
            <hr/>
            <h5>Name</h5><p>Austin Sedlack</p>
            <h5>Email</h5><p>asedlackcode@gmail.com</p>
            <h5>Location</h5><p>Riverside, CA</p>
            <div className="row">
                <h5 className="col"><a href="https://github.com/asedlackcode">Github</a></h5>
                <h5 className="col"><a href="https://www.linkedin.com/in/austin-sedlack-b3602419a/">LinkedIn</a></h5>
                <h5 className="col">Contact me for more info</h5>
            </div>
            
        </div>
    )
};

export default Contact;