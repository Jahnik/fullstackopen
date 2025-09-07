import { use, useState } from 'react'



const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(total + 1)
  }

  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(total + 1)
  }

  const increaseBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1> Unicafe Feedback!</h1>
      <Button onClick={() => increaseGood()} text='Good'></Button>
      <Button onClick={() => increaseNeutral()} text='Neutral'></Button>
      <Button onClick={() => increaseBad()} text='Bad'></Button>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <h1>Statistics</h1>
      <p>Total Feedback: {total}</p>
      <p>Feedback Average: {(good + (-bad))/total}</p>
      <p>Feedback %Positive: {good/total*100}%</p>
    </div>
  )
}

export default App