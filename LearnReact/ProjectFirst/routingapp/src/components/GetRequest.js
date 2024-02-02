import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

export class Users extends Component {
  state = {
    person: [],
    users: [],
    users2: [],
  };
  componentDidMount() {
    // axios.get("fromurl")
    //   .then() //called on success
    //   .catch() //called on failure
    //   .finally() // called
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const person = res.data;
      this.setState({ person });
    });
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
    
  }
  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>UserName</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {this.state.person.map((p) => (
              <tr>
                <td>{p.id}</td>
                <td>{p.username}</td>
                <td>{p.website}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ol>
          {this.state.person.map((p) => (
            <li>{p.username}</li>
          ))}
        </ol>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((p) => (
              <tr>
                <td>{p.id}</td>
                <td>{p.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      
   
      </div>
    );
  }
}
