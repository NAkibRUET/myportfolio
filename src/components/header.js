import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    //const url = process.env.NODE_ENV === "production" ? "/myportfolio" : "/";
    const style = {
      backgroundColor: "#fff",
      color: "green",
    };
    const pathName = this.props.location.pathname;
    console.log(pathName);
    return (
      <Router>
        {process.env.NODE_ENV === "production" ? (
          <MDBNavbar
            color="black"
            dark
            expand="md"
            className="px-lg-5 px-md-5"
            style={{}}
          >
            <MDBNavbarBrand className="pl-lg-5">
              <img src={process.env.PUBLIC_URL + "./icon4.png"} width="50" />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right className="pr-lg-5">
                <MDBNavItem active={pathName == "/myportfolio"}>
                  <MDBNavLink
                    to="/"
                    onClick={() => this.props.history.push("/myportfolio")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  active={pathName.match(/about/g) != null}
                  onClick={() => this.props.history.push("/myportfolio/about")}
                >
                  <MDBNavLink to="/myportfolio/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  active={pathName.match(/projects/g) != null}
                  onClick={() =>
                    this.props.history.push("/myportfolio/projects")
                  }
                >
                  <MDBNavLink to="/myportfolio/projects">Projects</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  active={pathName.match(/certifications/g) != null}
                  onClick={() =>
                    this.props.history.push("/myportfolio/certifications")
                  }
                >
                  <MDBNavLink to="/myportfolio/certifications">
                    Certifications
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">My Blogs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Contact Me</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        ) : (
          <MDBNavbar
            color="black"
            dark
            expand="md"
            className="px-lg-5 px-md-5"
            style={{}}
          >
            <MDBNavbarBrand className="pl-lg-5">
              <img src={process.env.PUBLIC_URL + "./icon4.png"} width="50" />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right className="pr-lg-5">
                <MDBNavItem active={pathName == "/"}>
                  <MDBNavLink
                    to="/"
                    onClick={() => this.props.history.push("/")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  active={pathName.match(/about/g) != null}
                  onClick={() => this.props.history.push("/about")}
                >
                  <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  active={pathName.match(/projects/g) != null}
                  onClick={() => this.props.history.push("/projects")}
                >
                  <MDBNavLink to="/projects">Projects</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  active={pathName.match(/certifications/g) != null}
                  onClick={() => this.props.history.push("/certifications")}
                >
                  <MDBNavLink to="/certifications">Certifications</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">My Blogs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Contact Me</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        )}
      </Router>
    );
  }
}

export default withRouter(NavbarPage);
