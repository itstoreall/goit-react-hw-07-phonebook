import { connect } from 'react-redux';
import { contactFilter } from '../../redux/contacts/contact-actions';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/contacts/contacts-selectors';
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
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
