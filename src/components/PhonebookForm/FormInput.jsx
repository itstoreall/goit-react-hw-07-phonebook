import PropTypes from 'prop-types';

const FormInput = ({ onAddContact }) => {
  return <input type="text" value="value" onChange={onAddContact} />;
};

FormInput.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default FormInput;
