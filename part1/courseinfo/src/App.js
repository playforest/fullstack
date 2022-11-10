
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
            return <Part part={module.name} exercise={module.exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content props={[part1, part2, part3]} />
      <Total sum={part1.exercises+part2.exercises+part3.exercises}/>

    </div>
  )
}

export default App