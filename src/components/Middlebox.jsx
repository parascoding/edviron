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
                          <Card.Title>Users</Card.Title>
                          <Card.Text>1,000</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className="m-2">
                      <Card>
                        <Card.Body>
                          <Card.Title>Orders</Card.Title>
                          <Card.Text>500</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3} className="m-2">
                      <Card>
                        <Card.Body>
                          <Card.Title>Sales</Card.Title>
                          <Card.Text>$50,000</Card.Text>
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
                    <Table striped bordered hover>
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
                          <td>User 1</td>
                          <td>Active</td>
                          <td>4.5</td>
                          <td>10</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>User 2</td>
                          <td>Inactive</td>
                          <td>3.0</td>
                          <td>5</td>
                          <td>$50</td>
                        </tr>
                        <tr>
                          <td>User 3</td>
                          <td>Active</td>
                          <td>4.8</td>
                          <td>15</td>
                          <td>$150</td>
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
