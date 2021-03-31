import { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET } from './redux/contacts/contact-operations';
import { ADD } from './redux/contacts/contact-operations';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { getLoading } from './redux/contacts/contacts-selectors';
import { wrapper, title, subtitle, loading } from './App.module.scss';

function App({ handleSubmit, handleInputFilter, isLoading }) {
  useEffect(() => {
    GET();
  });

  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>
        Contacts {isLoading && <span className={loading}>Loading...</span>}
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => dispatch(GET()),
    handleSubmit: newContact => dispatch(ADD(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * Connect (React компоненты)
 * - Props
 * - возвращает новый компонент, который
 * оборачивает наш компонент App и под капотом
 * подписывается к mapStateToProps и mapDispatchToProps
 */

/**
 * Container (React-Redux связь)
 * - mapStateToProps
 * - использует селекторы. Контейнер
 * кидает селектору весь стейт, а селекторы
 * обратно возвращают какойто value из стора.
 * Не контейнеры, не компоненты на прямую со
 * стором не работают. Container - это функция
 * connect, в которой делаются все подписки.
 * Контейнер через селектор получает кусочки
 * стора и кждый раз при обновлении стора
 * вызвыается mapStateToProps и компонент
 * обновляется новыми props.
 */

/**
 * Selector (Redux, часть логики)
 * - Store
 * - вспомогательная функция, получает
 * весь стор от контейнера, делает запрос в стор
 * и из себя возвращает это значение. Селектор
 * знает внутреннюю структуру стора. Его использует
 * контейнер при подписке mapStateToProps
 */

/**
 * Reducer
 * - Store
 * - обновляет стор. Получает предидущее состояние,
 * плюс payload из actions, обрабатывает, и делает
 * следующий стейт
 */
