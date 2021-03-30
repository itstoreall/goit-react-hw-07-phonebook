import { useEffect } from 'react';
import { connect } from 'react-redux';
// import contactsOperations from './redux/contacts/contact-operations';
import { GET } from './redux/contacts/contact-operations';
import { ADD } from './redux/contacts/contact-operations';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { wrapper, title, subtitle, loading } from './App.module.scss';

function App({ handleSubmit, handleInputFilter, isLoading }) {
  useEffect(() => {
    GET();
  });

  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>
        Contacts {isLoading && <span className={loading}>Loading...</span>}
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => dispatch(GET()),
    handleSubmit: newContact => dispatch(ADD(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
