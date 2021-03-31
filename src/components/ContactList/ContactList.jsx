import ContactItem from './ContactItem';
// import PropTypes from 'prop-types';
import { contactList } from './Contacts.module.scss';

// Презентационный компонент
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

export default ContactList;
