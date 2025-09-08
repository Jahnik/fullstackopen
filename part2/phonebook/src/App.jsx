import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "000-000-0000"
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameObject = { name: newName }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook!`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Search for <input value={newSearch} onChange={handleSearch}/></p>
      <form onSubmit={handleSubmit}>
        <div>
          <p>name: <input value={newName} onChange={handleName}/></p>
          <p>number: <input value={newNumber} onChange={handleNumber}/></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
      persons.filter(person => 
        person.name.toLowerCase().includes(newSearch)).map(
          person => <p key={person.name}>{person.name} {person.number}</p>
        )
      }
    </div>
  )
}

export default App