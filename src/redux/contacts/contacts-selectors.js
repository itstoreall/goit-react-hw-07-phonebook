/**
 * Функция получает весь стейт и возвращает маленькую
 * его часть
 */

// Простой селектор
export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

// Композитный селектор
export const getFilteredContects = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
