import React from 'react';

function About() {
    return(
        <div className="container" style={{ 
            marginTop: "50px", 
            border: "grey solid thin",
            borderRadius: "5px", 
            padding: "10px",
            backgroundColor:"white"}}>
            <h3>About me</h3>
            <hr/>
            <img src="/imgs/profPic.jpg" style={{width:"230px", padding: "5px"}}></img>
            <p>Hello! My name is Austin. Im 24 and live in Riverside, CA. I am currently working toward a certification in Web Development at UCR Extension. I plan to further my education in the Web Development field to earn a degree, and hopefully find the path I've been dreaming of.</p>
            <p>I'm a motivated Full Stack Developer and problem solver with a background in big data. Experience with analytical thinking, project management, strong team skills, and excellent verbal and written communication. Experienced in HTML5, CSS, MYSQL, Javascript, MongoDB, Mongoose, Node.js, Express, and AJAX.</p>

        </div>
    )
};

export default About;