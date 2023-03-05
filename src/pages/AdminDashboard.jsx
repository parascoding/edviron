import React from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import "../static/css/searchbar.css";
import Sidebar from '../components/Sidebar'
import Middlebox from "../components/Middlebox";
import RightSide from "../components/RightSide";
const AdminDashboard = () => {
  return (
    <>
      <Sidebar />
      <RightSide />
      <Middlebox />
    </>
  );
};
export default AdminDashboard;
