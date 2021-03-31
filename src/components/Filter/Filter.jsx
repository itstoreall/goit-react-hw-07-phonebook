import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import { label, input } from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={label}>
      Find contacts by name
      <input className={input} value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.contactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
