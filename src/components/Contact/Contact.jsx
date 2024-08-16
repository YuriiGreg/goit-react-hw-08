import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>{contact.name}: {contact.number}</span>
      <button onClick={() => onDeleteContact(contact.id)} className={styles.button}>Delete</button>
    </li>
  );
};

export default Contact;


