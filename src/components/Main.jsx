import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume"


const Main = () => (
    <Switch>
        <Route exact path="/" render={LandingPage} />
        <Route exact path="/react-portfolio" render={LandingPage} />
        <Route path="/react-portfolio/aboutme" component={AboutMe} />
        <Route path="/react-portfolio/contact" component={Contact} />
        <Route path="/react-portfolio/projects" component={Projects} />
        <Route path="/react-portfolio/resume" component={Resume} />
    </Switch>
)

export default Main
