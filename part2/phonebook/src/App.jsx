import { useState } from 'react'


const Search = ({value, onChange}) => {
  return(
    <p>Search for <input value={value} onChange={onChange}/></p>
  )
}

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
    <div>
      <p>name: <input value={props.newName} onChange={props.handleName}/></p>
      <p>number: <input value={props.newNumber} onChange={props.handleNumber}/></p>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = ({persons}) => {
  return (
    <div>{persons.map(person => 
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    )}</div>
  )
}

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
      <Search value={newSearch} onChange={handleSearch}/>
      <Form onSubmit={handleSubmit}
        newName={newName} handleName={handleName}
        newNumber={newNumber} handleNumber={handleNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={
        persons.filter(person => person.name.toLowerCase().includes(newSearch))
      }/>
    </div>
  )
}

export default App