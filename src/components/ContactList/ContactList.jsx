import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

const selectContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.filters.name;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => 
    contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>{name}: {number}</p>
          <button onClick={() => handleDelete(id)} className={styles.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;





