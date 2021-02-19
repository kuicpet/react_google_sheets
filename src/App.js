import React, { Component } from 'react';
import axios from "axios";
import { Button, Form, Container, Header} from "semantic-ui-react";
import "./App.css";

export default class App extends Component {
  
  state = {
    name: "",
    age: "",
    salary: "",
    hobby: ""
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);


    const url = "https://sheet.best/api/sheets/71dc919e-ae85-47e4-bd02-a1a925a07e8a";
    axios.post(url, this.state)
    .then(response => {
      console.log(response);
    })
    this.setState({
      name: "",
      age: "",
      salary: "",
      hobby: ""
    })
  }

  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <Container fluid className="container">
        <Header as="h2">React Google Sheets!</Header>
        <Form className="form" onSubmit={this.handleSubmit} error>
          <Form.Field required>
            <label>Name</label>
            <input placeholder="Enter your name" type="text" name="name" value={name} onChange={this.handleChange} required />
          </Form.Field>
          <Form.Field required>
            <label>Age</label>
            <input placeholder="Enter your age" type="text" name="age" value={age} onChange={this.handleChange}  required />
          </Form.Field>
          <Form.Field required>
            <label>Salary</label>
            <input placeholder="Enter your salary" type="text" name="salary" value={salary} onChange={this.handleChange}  required />
          </Form.Field>
          <Form.Field required>
            <label>Hobby</label>
            <input placeholder="Enter your hobby" type="text" name="hobby" value={hobby} onChange={this.handleChange}  required />
          </Form.Field>
          <Button type="submit" >Submit</Button>
        </Form>
      </Container>
    )
  }
}
