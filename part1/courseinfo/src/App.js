
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
  const sum = props.sum.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts} />
      <Total sum={course.parts}/>

    </div>
  )
}

export default App