import React from "react";
import {
  Nav,
  NavLink,
  Navbar,
  Col,
  Row,
  Container,
  Image,
} from "react-bootstrap";
import sidebarLogo from "../static/img/sidebarLogo.png";
import "../static/css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faUser,
  faImages,
  faNoteSticky,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <>
      <div className="App">
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <Image
                src={sidebarLogo}
                height="30"
                className="d-inline-block align-top sidebar-logo mt-3"
                alt="Logo"
              />
              <Nav defaultActiveKey="/" className="flex-column navlinks">
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faThLarge} /> Dashboard
                </Nav.Link>
                <Nav.Link href="/users">
                  <FontAwesomeIcon icon={faUser} />
                  Users
                </Nav.Link>
                <Nav.Link href="/settings">
                  <FontAwesomeIcon icon={faImages} />
                  Projects
                </Nav.Link>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faNoteSticky} /> Sales
                </Nav.Link>
                <div className="navlink-other">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faGear} /> Settings
                  </Nav.Link>
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faSignOut} /> Logout
                  </Nav.Link>
                </div>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Sidebar;
