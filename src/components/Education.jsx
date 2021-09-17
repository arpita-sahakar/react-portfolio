import React from "react";
import { Grid, Cell } from "react-mdl";

function Education(props) {
  return (
    <Grid>
      <Cell col={4}>
        <h6 style={{ fontWeight: "bold" }}> {props.endYear}</h6>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: "0px" }}>{props.schoolName}</h4>
        <p style={{ fontWeight: "bold" }}>{props.schoolDesc}</p>
      </Cell>
    </Grid>
  )

}

export default Education;
