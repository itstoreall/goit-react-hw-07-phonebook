import { connect } from 'react-redux';
import ContactList from './ContactList';
import { DELETE } from '../../redux/contacts/contact-operations';
import { getFilteredContects } from '../../redux/contacts/contacts-selectors';

// const getFilteredItems = (allItems, filter) => {
// const normalizedFilter = filter.toLowerCase();
// return allItems.filter(({ name }) =>
//   name.toLowerCase().includes(normalizedFilter),
// );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getFilteredItems(items, filter),
// });

const mapStateToProps = state => ({
  contacts: getFilteredContects(state),
});

// Dispatch в компоненте вызывает операцию

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(DELETE(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
