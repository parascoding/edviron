import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Table,
} from "react-bootstrap";
import "../static/css/middle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const Middlebox = () => {
  return (
    <>
      <div className="middle mt-3">
        <Container fluid>
          <Row className="mt-4">
            <Col>
              <Container style={{ maxWidth: "1100px" }}>
                <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-2"
                    style={{ backgroundColor: "#e5e5e5", width: "80%" }}
                  />
                </Form>
                <div className="boxes">
                  In the last 30 Days
                  <Row>
                    <Col md={3} className="m-2">
                      <Card>
                        <Card.Body>
                          <Card.Title>30,000</Card.Title>
                          <Card.Text>Payment</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className="m-2">
                      <Card>
                        <Card.Body>
                          <Card.Title>250</Card.Title>
                          <Card.Text>New Users</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className="m-2">
                      <Card>
                        <Card.Body>
                          <Card.Title>$400,000</Card.Title>
                          <Card.Text>Revenue Generated</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Container style={{ maxWidth: "1100px" }}>
                <Row className="align-items-center">
                  <Col>
                    <h3>All users</h3>
                  </Col>
                  <Col md="auto">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faFilter} />
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Table>
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Status</th>
                          <th>Ratings</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mulay</td>
                          <td>Verified</td>
                          <td>40%</td>
                          <td>400</td>
                          <td>$400,000</td>
                        </tr>
                        <tr>
                          <td>Tarun</td>
                          <td>Pending</td>
                          <td>57%</td>
                          <td>200</td>
                          <td>$400,000</td>
                        </tr>
                        <tr>
                          <td>Jasraj</td>
                          <td>Verified</td>
                          <td>89%</td>
                          <td>40,000</td>
                          <td>$1,400,000</td>
                        </tr>
                        <tr>
                          <td>Lakshay</td>
                          <td>Active</td>
                          <td>No Ratings Available</td>
                          <td>0</td>
                          <td>$150</td>
                        </tr>
                        <tr>
                          <td>Aditya</td>
                          <td>Verified</td>
                          <td>50%</td>
                          <td>30</td>
                          <td>$25,000</td>
                        </tr>
                        <tr>
                          <td>Ojha</td>
                          <td>Pending</td>
                          <td>64%</td>
                          <td>400</td>
                          <td>$400,000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Middlebox;
