/*
 * LoginPage
 *
 *
 */
import React from 'react';

export default class LoginPage extends React.Component {

  state = {
    warning: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const valueLog = e.target.elements[0].value;
    const valuePass = e.target.elements[1].value;

    window.localStorage.setItem('rr_login', valueLog);
    window.localStorage.setItem('rr_password', valuePass);

    const login = window.localStorage.getItem('rr_login');
    const password = window.localStorage.getItem('rr_password');

    if (login === 'Admin' && password === '12345') {
      const currentLocation = window.location.origin;
      document.location.href = `${currentLocation}/profile`;
    } else {
      this.setState({
        warning: 'User name or password is not correct'
      })
    }
  }
  render() {
    const { warning } = this.state;
    return (
      <section className="login">
        <h3> Login Form </h3>
        <form className="login_form" onSubmit={this.handleSubmit}>
          <label>{warning}</label>
          <input type='text' placeholder=' login' required/>
          <input type='text' placeholder=' password' required/>
          <button className="login_button" type='submit'>Submit</button>
        </form>
      </section >
    )
  }
}

