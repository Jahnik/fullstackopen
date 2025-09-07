import { use, useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.good == 0 && props.bad == 0 && props.neutral == 0) {
    return(
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <StatisticLine text='Good' value={props.good}/>
      <StatisticLine text='Bad' value={props.bad}/>
      <StatisticLine text='Neutral' value={props.neutral}/>
      <StatisticLine text='Total Feedback' value={props.total}/>
      <StatisticLine text='Feedback Average' value={(props.good + (-props.bad))/props.total}/>
      <StatisticLine text='Feedback % Positive' value={props.good/props.total*100 + "%"}/>
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <p>{props.text}: {props.value}</p>
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
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App