
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({props}) => {
  return (
    <div>
        { 
          props.map((module) => {
            return <Part part={module[0]} exercise={module[1]} />
          })
        }
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.sum}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content props={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total sum={exercises1+exercises2+exercises3}/>

    </div>
  )
}

export default App