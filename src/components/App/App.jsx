import React, { Component } from "react";
import Notiflix from "notiflix";
import { ContactForm, ContactList, Filter } from "components";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],

    filter: ''
  }

  handleSearch = evt => {
    this.setState({filter: evt.currentTarget.value});
  }

  handleFilter = () => {
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  handleDeleteContact = contactId => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(({ id }) => id !== contactId) });
  };

  handleAddContact = contact => {
    const { contacts } = this.state;
    const isContactExisted = contacts.find(({ name }) => name === contact.name);

    if (isContactExisted) {
      return Notiflix.Notify.failure(`${contact.name} already exists in your contact list.`);
    } else {
      this.setState({
        contacts: [...contacts, contact],
      });

      Notiflix.Notify.success('Success! New contact was added!');
    }
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          handleAddContact={this.handleAddContact}
          onSubmit={this.formSubmitHandler} // onSubmit не прослуховувач (проп) для події, а просто назва пропу на компонент (this.props.onSubmit)
        />
        <h2>Contacts</h2>
        <Filter
          handleSearch={this.handleSearch}
        />
        <ContactList
          contacts={this.handleFilter()}
          handleDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
};