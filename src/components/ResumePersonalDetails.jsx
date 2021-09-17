import React from 'react';
import profPic from "../images/profilePic.jpg";

function ResumePersonalDetails() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img
                    src={profPic}
                    alt="avatar"
                    style={{ height: "200px" }}
                />
            </div>

            <div className="resume-leftside">
                <h2 style={{ paddingTop: "2em" }}>Arpita Kar</h2>
                <h4>Full Stack Web Developer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                    Full Stack Web Developer. Passionate about coding and problem solving. Worked on various project utilizing MERN stack. Ability to effectively work with team members ensuring fulfillment of desired requirements. Prior to transitioning to coding I worked in marketing industry as a marketing manager.
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>
                    8001 Lake Union Hill Way Rd,
                    <br /> Alpharetta GA-30004
                </p>
                <h5>Phone</h5>
                <p>623-277-6540</p>
                <h5>Email</h5>
                <p>arpita.sahaa@gmail.com</p>
                <h5>Github</h5>
                <p>https://github.com/arpita-sahakar</p>
                <h5>Linkedin</h5>
                <p>www.linkedin.com/in/arpita-kar-29b8b069</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </div>
        </div>
    )
}

export default ResumePersonalDetails
