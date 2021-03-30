import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { DELETE } from '../../redux/contacts/contact-actions';
import { contactList } from './Contacts.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={contactList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredItems = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredItems(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(DELETE(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
