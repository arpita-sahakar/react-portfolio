import React from 'react';
import { Grid, Cell } from "react-mdl";

function Skill({ skillType, skills, key }) {
    return (
        <Grid key={key} style={{ padding: "0x" }}>
            <Cell col={4}>
                <p style={{ fontWeight: "bold" }}>{skillType}</p>
            </Cell>
            <Cell col={8}>
                <p>{skills.join(", ")}</p>
            </Cell>
        </Grid >
    )
}

export default Skill
