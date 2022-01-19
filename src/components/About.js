import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
        <h4>Simple Task Tracker app using ReactJS</h4>
        <p>You can find the original Crash course at : </p>
        <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
            React JS Crash Course - Traversy Media
        </a><br/>
        
        <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
