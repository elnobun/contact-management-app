import React, { Component, Fragment } from 'react';
import Contact from '../contacts/Contact';
import { Consumer } from '../Context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-5 mb-2">
                <span className="text-info">Contacts</span>
              </h1>
              {contacts.length === 0
                ? 'No Contacts'
                : contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                  ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
