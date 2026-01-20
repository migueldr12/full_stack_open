import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("Add your name");

  const addName = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in your phonebook`);

      setNewName("");
    } else {
      const nameObject = { name: newName };

      setPersons(persons.concat(nameObject));

      setNewName("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}> {person.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
