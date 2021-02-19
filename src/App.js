import React, { Component } from 'react';
import { Button, Form, Container, Header } from "semantic-ui-react";
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
  }

  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <Container fluid className="container">
        <Header as="h2">React Google Sheets!</Header>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Enter your name" type="text" name="name" value={name} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder="Enter your age" type="text" name="age" value={age} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder="Enter your salary" type="text" name="salary" value={salary} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder="Enter your hobby" type="text" name="hobby" value={hobby} onChange={this.handleChange} />
          </Form.Field>
          <Button type="submit" >Submit</Button>
        </Form>
      </Container>
    )
  }
}
