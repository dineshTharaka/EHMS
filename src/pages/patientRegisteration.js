import { useState, React } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Col,
  Breadcrumb,
  Container,
  Row,
  Image,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import colors from '../utils/colors/Colors';
import getAPI from "../utils/apis/APIs";

const PatientRegisteration = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  //ract hook form validation
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const password = watch("password");

  const [hasGurdian, setHasGurdian] = useState(false);
  const [age, setAge] = useState(null);
  const [birthDate, setBirthDate] = useState(new Date());

  const handleRadioButtonChange = (event) => {
    if (event.target.value === "yes") {
      setHasGurdian(true);
      register("createdBy");
    } else {
      setHasGurdian(false);
      unregister("guardianName");
      unregister("guardianContactNumber");
    }
  };

  //calculating age
  var calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    if (age_now < 18) {
      setHasGurdian(true);
    } else {
      setHasGurdian(false);
    }
    setAge(age_now);
    return age_now;
  };

  const handleChange_age = (event) => {
    setBirthDate({ dob1: event.target.value }, () => {
    });

    var age_latest = { age_latest: calculate_age(event.target.value) };
    console.log(age_latest);

    setBirthDate({ age1: age_latest }, () => {
      console.log("Age:", birthDate.age1);
    });
  };

  //backend api
  const registerPatient = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      axios
        .get(getAPI("auth"))
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            navigate("/");
          }
          if (res.status === 404) {
          }
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            <Form
              className="text-start"
              onSubmit={handleSubmit(registerPatient)}
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "Required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message:
                        "Please enter valid name. Should not contain numbers",
                    },
                  })}
                />
              </Form.Group>
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}

              <Form.Group className="mb-3" controlId="formBasicDob">
                <Form.Label>Date Of birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date of birth"
                  {...register("dob", {
                    required: "Required",
                  })}
                  onChange={handleChange_age}
                />
              </Form.Group>
              {errors.dob && (
                <span style={{ color: colors.warning }}>{errors.dob.message}</span>
              )}

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  {...register("address", {
                    required: "Required",
                  })}
                />
              </Form.Group>
              {errors.address && (
                <span style={{ color: "red" }}>{errors.address.message}</span>
              )}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  {...register("gender", {
                    required: "Required",
                  })}
                >
                  <option disabled>Select gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </Form.Select>
              </Form.Group>
              {errors.gender && (
                <span style={{ color: "red" }}>{errors.gender.message}</span>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value:
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                      message: "Enter valid e-mail",
                    },
                  })}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contact Number"
                  {...register("contact", {
                    required: "Required",
                    pattern: {
                      value: /^(0|[1-9]\d*)$/, //positive int = /^(0|[1-9]\d*)$/  negative & positive decimal= /^-?(0|[1-9]\d*)(\.\d+)?$/
                      message: "Enter valid e-mail",
                    },
                  })}
                />
              </Form.Group>
              {errors.contact && (
                <span style={{ color: "red" }}>{errors.contact.message}</span>
              )}
              <Form.Group className="mb-3" controlId="formBasicNic">
                <Form.Label>NIC Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="NIC"
                  {...register("nic", {
                    pattern: {
                      value: /^(0|[1-9]+V\d*)$/, //positive int = /^(0|[1-9]\d*)$/  negative & positive decimal= /^-?(0|[1-9]\d*)(\.\d+)?$/
                      message: "Enter valid nic",
                    },
                  })}
                />
              </Form.Group>
              {errors.nic && (
                <span style={{ color: "red" }}>{errors.nic.message}</span>
              )}
              {age > 18 || age == null ? (
                <>
                  <Form.Group className="mb-3" controlId="formBasicGaurdian">
                    <Form.Label>Account Created by</Form.Label>
                    <span>
                      <Form.Check
                        type="radio"
                        value="yes"
                        name="radio"
                        aria-label="radio 1"
                        onChange={handleRadioButtonChange}
                      />
                      Gurdian
                    </span>
                    <Form.Check
                      type="radio"
                      value="no"
                      name="radio"
                      aria-label="radio 1"
                      onChange={handleRadioButtonChange}
                      defaultChecked
                    />
                    Self
                  </Form.Group>
                </>
              ) : null}

              {hasGurdian ? (
                <>
                  <Form.Group className="mb-3" controlId="formBasicGaurdian">
                    <Form.Label>Guardian Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Guardian Name"
                      {...register("gurdianName", {
                        required: "Required",
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message:
                            "Please enter valid name. Should not contain numbers",
                        },
                      })}
                    />
                  </Form.Group>
                  {errors.gurdianName && (
                    <span style={{ color: "red" }}>
                      {errors.gurdianName.message}
                    </span>
                  )}

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicGuardianContact"
                  >
                    <Form.Label>Guardian Contact</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Guardian Contact"
                      {...register("guardianContactNumber", {
                        required: "Required",
                        pattern: {
                          value: /^(0|[1-9]\d*)$/, //positive int = /^(0|[1-9]\d*)$/  negative & positive decimal= /^-?(0|[1-9]\d*)(\.\d+)?$/
                          message: "Enter valid e-mail",
                        },
                      })}
                    />
                  </Form.Group>
                  {errors.guardianContactNumber && (
                    <span style={{ color: "red" }}>
                      {errors.guardianContactNumber.message}
                    </span>
                  )}
                </>
              ) : null}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 4,
                      message: "Must be include more than 4 characters",
                    },
                    maxLength: {
                      value: 6,
                      message: "Must be less than 7 characters",
                    },
                  })}
                />
              </Form.Group>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("Password2", {
                    required: "Required",
                    validate: (value) =>
                      value === password || "password do no match",
                  })}
                />
              </Form.Group>
              {errors.Password2 && (
                <span style={{ color: "red" }}>
                  {errors.Password2.message}
                  <br />
                </span>
              )}
              {!isLoading ? (
                <Button variant="primary" type="submit">
                  Submit
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
    </>
  );
};

export default PatientRegisteration;
