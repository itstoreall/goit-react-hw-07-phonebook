import { connect } from 'react-redux';
import * as actions from './redux/contacts/contact-actions';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { wrapper, title, subtitle } from './App.module.scss';

function App({ handleSubmit, handleInputFilter }) {
  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: newContact => dispatch(actions.ADD(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
