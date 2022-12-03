import { useState } from 'react'

const Heading = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}

const Button = ({name, increment}) => {
  return (
    <button onClick={increment}>
      {name}
    </button>
  )
}

const StatisticLine = ({name, value}) => {
  let perc = ''
  if (name=='positive') {
    perc = '%'
  }

  return (
    <tr><td>{name}</td><td>{value}{perc}</td></tr>
  )
}


const Statistics = ({props}) => {
  let elements = []
  let perc = ''
  
  if (props.all == 0) {
    return ('No feedback given')
  } else {
    for (const [key, value] of Object.entries(props)) {
      elements.push( <StatisticLine name={key} value={value}/> )
    }
  
    return (
      <table>
        <tbody>
          {elements}
        </tbody>
      </table>
    )
  }


}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const average = all == 0 ? 0 : (good - bad) / all
  const positive = all == 0 ? 0 : (good / all) * 100;

  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const handleBadClick = async () => {
    setBad(bad+1)
    setAll(all+1)
  }



  return (
    <div>
      <Heading title='give feedback'/>
        <Button name='good' increment={handleGoodClick}/>
        <Button name='neutral' increment={handleNeutralClick}/>
        <Button name='bad' increment={handleBadClick}/>

      <Heading title='statistics'/>
      <Statistics props={{good, neutral, bad, all, average, positive}} />
    </div>
  )


}

export default App