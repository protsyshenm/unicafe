import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleGoodClick}/>
      <Button text='neutral' handleClick={handleNeutralClick}/>
      <Button text='bad' handleClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  const all = good + neutral + bad
  const average = ((good * 1) + (bad * -1)) / all
  const positive = (good / all) * 100
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine name='good' value={good} />
      <StatisticLine name='neutral' value={neutral} />
      <StatisticLine name='bad' value={bad} />
      <StatisticLine name='all' value={all} />
      <StatisticLine name='average' value={average} />
      <StatisticLine name='positive' value={positive} />
    </div>
  )
}

const StatisticLine = ({ name, value }) => {
  if (name === 'positive') {
    return <p>{name} {value} %</p>
  }
  return <p>{name} {value}</p>
}

export default App