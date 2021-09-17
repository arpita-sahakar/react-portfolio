import React from 'react'
import Experience from './Experience'

function ExperienceList({ experiences }) {
    return (
        experiences.map((exp, index) => <Experience key={index} startYear={exp.startYear} endYear={exp.endYear}
            title={exp.title} company={exp.company} rolesAndResponsibilities={exp.rolesAndResponsibilities} />)
    )
}

export default ExperienceList
