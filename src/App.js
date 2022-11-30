import { useState } from 'react';
import './App.css';
import Add from './Add';
import Contacts from './Contacts';
function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <h1>My UCC Contacts</h1>
      <Add setContacts={setContacts}/>
      <Contacts contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
