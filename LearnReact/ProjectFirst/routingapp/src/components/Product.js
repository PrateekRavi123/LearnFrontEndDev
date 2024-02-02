import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const navigatehandle =  () => {
    navigate('/contact');
  }
  return (
    <div  >
      <h1>Products List</h1>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pen</td>
          <td>10</td>
          <td>Good pen</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Book</td>
          <td>100</td>
          <td>Ficiton Novel</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Laptop</td>
          <td>50000</td>
          <td>Asus Gaming Laptop</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="outline-danger" onClick={navigatehandle}>Place An Order</Button>

    </div>
  );
};

export default Product;
