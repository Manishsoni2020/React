import React from 'react'
import './Name.css'
const Information = () => {
  return (
    <div class="inform">
      <div className="inleft">
         <div className="education">
         <h3 >EDUCATION</h3>
         {/* <h3>----------</h3> */}
         <h4>BACHELOR</h4>
         <h4>University of Rajasthan</h4>
         </div>
         <div className="project">
            <h3>PERSONAL PROJECTS</h3>
            {/* <h3>----------</h3> */}
            <h4>Hospital Management System</h4>
            <p>* The 'Hospital Management System' integrates JDBC and
            Servlets, allowing organized SQL data access for patient, doctor, and staff record</p>
            <p>* Technologies Used: JDBC, Servlets, JAVA SCRIPT, CSS, HTML
            </p>
         </div>
         <div className="work">
            <h3>JAVA DEVELOPER INTERN</h3>
            <h4>REGEX SOFTWARE SERVICES</h4>
            <p>As a Java intern at Regex Software Services, I have
been entrusted with various responsibilities aimed
at enhancing my skills and contributing to the
development of Java based software solutions. </p>
            <p>Collaborating with team members on project tasks I
have worked closely with cross-functional teams to
understand project requirements, prioritize tasks, and that my learning with the task should help me
develop new skills</p>
         </div>
      </div>
      <div className="inright">
        <div className="skill">
        <h3>SKILLS</h3>
      
        <button>JDBC</button>
     
        <button>CORE JAVA</button>
    
        <button>SERVLET</button>
        <button>JAVA SCRIPT</button>
        <button>REACT</button>
        <button>CSS</button>
        </div>
        <div className="achive">
            <h3>ACHIEVEMENTS</h3>
            <h4>HACKERRANK</h4>
            <h4>CODECHEF</h4>
            <h4>SQL ZOO</h4>
        </div>
        <div className="lang">
            <h3>LANGUAGES</h3>
            <h4>English</h4>
            <h4>Hindi</h4>
        </div>
        <div className="int">
        <h3>INTERESTS</h3>
      
      <button>Coding</button>
   
      <button> Learning</button>
  
      <button>Sports</button>
      <button> Music</button>
      <button>Gardening</button>
        </div>
      </div>
    </div>
  )
}

export default Information
