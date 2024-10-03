import { React } from "react";
import ReactTypingEffect from 'react-typing-effect';
import bg from '../Images/bg.jpg';
import Scrollspy from 'react-scrollspy';
import { Link as ScrollLink } from 'react-scroll';

function Home(){
    const texts = [
        'Software Engineer',
        'Frontend Engineer',
        'Backend Engineer',
        'Java Developer',
        'React Developer',
        'Node Developer',
        'Spring Developer'
    ];
    return(
        
            <div className="container col-xxl-8 px-4 py-5 " id="home" >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={bg} className="d-block mx-lg-auto img-fluid" alt="Background" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6 animate__animated animate__fadeInUp">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3  ">Hi, My Self Sujit Dhotre and , I Am a &nbsp;
                    <ReactTypingEffect
                            text={texts}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={500}
                        />
                        </h1>
                    <p className="lead">Solution-oriented and problem solver with 2 years of experience building and maintaining
                        software and software architecture.  skilled in Java, Spring, Spring MVC, JavaScript, MySql,
                        React.js, HTML and CSS  collaboration, and technical documentation..</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-lg px-4 me-md-2 hm-btn">
                    <ScrollLink to="contact" smooth={true} duration={500} data-to-scrollspy-id="contact">Contact Me</ScrollLink>
                    </button>
                    </div>
                </div>
                </div>
            </div>
  
   
    );
}

export default Home;