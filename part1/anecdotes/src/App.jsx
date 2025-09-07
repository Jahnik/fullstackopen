import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [popular, setPopular] = useState(0)

  //Returns a random number between min (inclusive) and max (exclusive)
  const getRandomInteger = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const handleGeneration = () => {
    setSelected(getRandomInteger(0, 8))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1

    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > copy[popular]) {
        setPopular(i)
      }
    }

    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes!</p>
      <button onClick={handleVote}>Vote!</button>
      <button onClick={handleGeneration}>Next anecdote!</button>
      <h1>Most Popular Anecdote</h1>
      <p>{anecdotes[popular]}</p>
      <p> has {votes[popular]} votes!</p>
    </div>
  )
}

export default App