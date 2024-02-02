import React, { Component } from "react";
import Badge from 'react-bootstrap/Badge';

export default class Contact extends Component {
  render() {
    return (
        <Badge  bg="success">
        <h1>Contact Details</h1>
        <p>Mobile No.: +91 999 999 9999</p>
        <p>Address: 42, NHP Market, Delhi</p>
        <p>Email: RelStore@reliance.com</p>
      </Badge>
    );
  }
}
