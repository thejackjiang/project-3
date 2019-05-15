import React, {Component} from 'react';
import Hero from "../components/Hero";
import RegContainer from "../components/RegContainer";
import GlobalCard from "../components/GlobalCard";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import LoginForm from "../components/LoginForm";
import Modal from "../components/Modal";
import AuthService from './../components/AuthService';
import {Link} from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    return (
<div>
 <Modal /> 
</div>

    );
  }
}

export default Login;
