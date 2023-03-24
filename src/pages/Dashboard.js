import React from "react";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import colors from "../utils/colors/Colors";
import Footer from "../components/Footer";

function Dashboard(props) {
  return (
    <div>
      <Row>
       <h2>appbar</h2>
        <Col xs lg="2">
        <h2>Sidebar</h2>
        </Col>
        <Col xs lg="2">
        <h2>Dashboard body</h2>
        </Col>
      </Row>
      <Row><Footer/></Row>
    </div>
  );
}

export default Dashboard;
