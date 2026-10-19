import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("Add your name");
  const [newPhoneNumber, setNewPhoneNumber] = useState("Add your phone number");

  const addName = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in your phonebook`);

      setNewName("");
      setNewPhoneNumber("");
    } else {
      const nameObject = { name: newName, phoneNumber: newPhoneNumber };

      setPersons(persons.concat(nameObject));

      setNewName("");
      setNewPhoneNumber("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          number:
          <input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
