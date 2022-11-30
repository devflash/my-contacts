import React, { useState } from 'react';
import './add.css';
import Config from '../config';

const Add = ({ setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = async () => {
    const payload = {
      name,
      contactInfo: number,
    };
    try {
      const response = await fetch(`${Config.API_SERVER}/contacts`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.msg) {
        // console.log('Added successfully');
        window.alert('Added successfully');
        setContacts((c) => [...c, payload]);
      }
    } catch (e) {}
  };

  return (
    <div className="form_wrapper">
      <div className="flex">
        <div className="flex">
          <label htmlFor="name">Contact Name: </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="flex">
          <label htmlFor="number">Contact Number: </label>
          <input
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
      </div>

      <button className="btn" onClick={addContact}>
        Add Contact
      </button>
    </div>
  );
};

export default Add;
