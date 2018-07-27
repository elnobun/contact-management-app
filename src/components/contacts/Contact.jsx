import React, { Component } from 'react';
import { Consumer } from '../Context';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowList = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteList = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}&nbsp;
                <i
                  onClick={this.onShowList}
                  className={
                    showContactInfo
                      ? 'fas fa-chevron-circle-down fa-sm text-muted'
                      : 'fas fa-chevron-circle-up fa-sm text-muted'
                  }
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-trash-alt"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteList.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'green',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
