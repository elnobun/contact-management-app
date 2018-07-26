import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowList = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteList = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
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
