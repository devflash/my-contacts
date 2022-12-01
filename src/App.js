import { useCallback, useState } from 'react';
import './App.css';
import Add from './Add';
import Contacts from './Contacts';
function App() {
  const [contacts, setContacts] = useState([]);

  const updateContacts = useCallback((contacts) => {
    setContacts(contacts);
  }, []);

  return (
    <div className="App">
      <h1>My UCC Contacts--------1111</h1>
      <Add setContacts={updateContacts} />
      <Contacts contacts={contacts} setContacts={updateContacts} />
    </div>
  );
}

export default App;
