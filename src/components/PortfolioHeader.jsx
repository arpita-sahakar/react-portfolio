import React from "react";
import { Header, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import "../container/App.css";

function PortfolioHeader() {
  return (
    <>
      <Header
        className="header-color"
        title={
          <Link style={{ textDecoration: "none", color: "white" }} to="/react-portfolio/">
            My Portfolio
          </Link>
        }
        scroll
      >
        <Nav />
      </Header>

      <Drawer
        title={
          <Link style={{ textDecoration: "none", color: "black" }} to="/react-portfolio/">
            My Portfolio
          </Link>
        }
      >
        <Nav />
      </Drawer>
    </>
  );
}

export default PortfolioHeader;
