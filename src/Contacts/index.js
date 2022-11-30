import React, { useEffect } from 'react';
import './contacts.css';
import Config from '../config';
const Contacts = ({ contacts, setContacts }) => {
  // console.log('URL>>>>>>>', Config.API_SERVER);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${Config.API_SERVER}/contacts`, {
          method: 'GET',
        });

        const data = await response.json();
        // const data = [];
        setContacts(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchContacts();
  }, []);
  if (contacts.length === 0) {
    return (
      <div className="contacts_wrapper">
        <p>You don't have any contacts</p>
      </div>
    );
  }
  return (
    <div className="contacts_wrapper">
      {contacts.map((cur, id) => (
        <div className="contact" key={id}>
          <p>{cur.name}</p>
          <p>{cur.contactInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
