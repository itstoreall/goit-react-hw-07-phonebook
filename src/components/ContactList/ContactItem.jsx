import PropTypes from 'prop-types';
import { contactItem, button } from './Contacts.module.scss';

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <li className={contactItem}>
      <span>
        {name}: {number}
      </span>
      <button className={button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
