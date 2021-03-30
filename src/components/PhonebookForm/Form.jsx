import { useState } from 'react';
import PropTypes from 'prop-types';
import { form, label, input, button } from './Form.module.scss';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Записывает значение инпута в стейт
  const handleInputForm = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  // Создает объект контакта
  const handleAddContact = e => {
    e.preventDefault();

    onSubmit({
      name: name,
      number: number,
    });

    setName('');
    setNumber('');
  };

  return (
    <form className={form}>
      <label className={label}>
        Name
        <input
          className={input}
          name="name"
          value={name}
          onChange={handleInputForm}
        />
      </label>

      <label className={label}>
        Number
        <input
          className={input}
          name="number"
          value={number}
          onChange={handleInputForm}
        />
      </label>

      <button className={button} tupe="submit" onClick={handleAddContact}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
