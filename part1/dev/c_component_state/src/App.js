const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age


  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>so you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="maya" age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App