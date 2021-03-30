import { connect } from 'react-redux';
import { FILTER } from '../../redux/contacts/contact-actions';
import PropTypes from 'prop-types';
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
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(FILTER(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
