import React from 'react'
import Skill from './Skill';
import { TableHeader, DataTable, Grid, Cell } from "react-mdl";

function Skills({ skills }) {
    return (
        skills.map((skill, index) =>
            <Skill skillType={skill.type} skills={skill.skills} key={index} />)
    )
}

export default Skills
