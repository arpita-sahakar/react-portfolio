import React from "react";
import { Grid, Cell } from "react-mdl";

function Experience(props) {
  return (
    <Grid key={props.key}>
      <Cell col={4}>
        <p style={{ fontWeight: "bold" }}>{props.startYear} - {props.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: "0px" }}>{props.title} - {props.company}</h4>
        <ul style={{ fontWeight: "bold" }}>
          {props.rolesAndResponsibilities.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </Cell>
    </Grid>
  )

}

export default Experience;
