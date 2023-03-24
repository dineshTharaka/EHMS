import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Col,
  Breadcrumb,
  Container,
  Row,
  Image,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const PatientRegister = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col
            md={4}
            sm={12}
            className="shadow-sm text-primary mt-5 p-4 text-center text-center rounded"
          >
            <h4>Patient Register</h4>
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDob">
                <Form.Label>Date Of birth</Form.Label>
                <Form.Control type="date" placeholder="Date of birth" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                  <option>Select gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Contact" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNic">
                <Form.Label>NIC Number</Form.Label>
                <Form.Control type="text" placeholder="NIC" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGaurdian">
                <Form.Label>Guardian Name</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGuardianContact">
                <Form.Label>Guardian Contact</Form.Label>
                <Form.Control type="text" placeholder="Guardian Contact" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PatientRegister;
