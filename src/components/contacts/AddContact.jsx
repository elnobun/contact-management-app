import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputField from '../common/TextInputField';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h1>Add Contacts</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <TextInputField
              htmlFor="name"
              label="Name:"
              type="text"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onHandleChange}
            />
            <TextInputField
              htmlFor="email"
              label="Email:"
              type="email"
              name="email"
              placeholder="Enter email..."
              value={email}
              onChange={this.onHandleChange}
            />
            <TextInputField
              htmlFor="phone"
              label="Phone:"
              type="text"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onHandleChange}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default AddContact;
