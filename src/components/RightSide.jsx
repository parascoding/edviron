import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Table, Button } from "react-bootstrap";
import "../static/css/rightside.css";
import Clock from "./Clock";

const RightSide = () => {
  return (
    <div className="right-side mt-3">
      <div className="header">
        <h3>Aditya Singh
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
        </h3>
      </div>
      <div className="recent-transactions">
        <h4 className="table-header">Recent Transactions</h4>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount of Sales</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User 1</td>
              <td>$100</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>User 2</td>
              <td>$200</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>User 3</td>
              <td>$300</td>
              <td>$30</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="outline-secondary" className="view-more">
          View More
        </Button>
      </div>
      <div className="highest-transactions">
        <h4 className="table-header">Highest Transactions</h4>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount of Sales</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User 4</td>
              <td>$400</td>
              <td>$40</td>
            </tr>
            <tr>
              <td>User 5</td>
              <td>$500</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>User 6</td>
              <td>$600</td>
              <td>$60</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="outline-secondary" className="view-all" >
          View All Transactions
        </Button>
      </div>
      <Clock />
    </div>
  );
};

export default RightSide;
