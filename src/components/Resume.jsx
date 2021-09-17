import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education.jsx";
import "../container/App.css";
import additionalExp from "./additional-experience.json";
import skillList from "./skills.json";
import ExperienceList from "./ExperienceList.jsx";
import Skills from "./Skills.jsx";
import ResumePersonalDetails from "./ResumePersonalDetails.jsx";

function Resume() {
  return (
    <div>
      <Grid id="resumeBackground">
        <Cell col={4}>
          <ResumePersonalDetails />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skills={skillList} />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Education</h2>
          <Education
            startYear={2020}
            endYear={2021}
            schoolName={"Georgia-Tech"}
            schoolDesc={"Full Stack Web-Development BootCamp"}
          />

          <Education
            startYear={2011}
            endYear={2013}
            schoolName={"Makhanlal Chaturvedi University, India"}
            schoolDesc={"Master's in PR & Advertising"}
          />

          <Education
            startYear={2006}
            endYear={2009}
            schoolName={"University of Calcutta, India"}
            schoolDesc={"Bachelor in Arts"}
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Additional Experience</h2>
          <ExperienceList experiences={additionalExp} />


          <hr style={{ borderTop: "3px solid #e22947" }} />

        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
