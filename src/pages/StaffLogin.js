import React, { PropTypes, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import colors from '../utils/colors/Colors';
import { useNavigate } from "react-router-dom";
import getAPI from "../utils/apis/APIs";

const StaffLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const data = { username, password };
      try {
        console.log(data);
        setLoading(true);
        //change backend url with real url. note get to post
        axios.get(getAPI("auth")).then((res) => {
          if (res.status === 200) {
            setLoading(false);
            localStorage.setItem("authToken", res.data.authToken);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("role", res.data.role);
              navigate('/dashboard')
          }
          if (res.status === 404) {
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col
          md={4}
          sm={12}
          className="shadow-sm text-primary mt-5 p-4 text-center text-center rounded"
        >
          <h4>Staff Login</h4>
          <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{  color: colors.success }} >Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleUsernameChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{  color: colors.success }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </Form.Group>

            {!isLoading ? (
              <Button variant="primary" type="submit">
                Login
              </Button>
            ) : (
              <Button variant="primary" disabled>
                <Spinner animation="border" size="sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                Loading
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

StaffLogin.propTypes = {};

export default StaffLogin;
