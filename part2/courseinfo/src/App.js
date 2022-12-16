const Course = ({course}) => {
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total sum={course.totalExercises()} />
    </div>
  )
}

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => {
    return (<p>
      {part.name} {part.exercises}
    </p>
    )
  }

const Content = ({parts}) => {
  return (
    parts.map(part => {
      return (
        <Part key={part.id} part={part} />
      )
    })
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ],
    totalExercises: function() {
      return this.parts.reduce(
        (accumulator, currentValue) => 
        accumulator + currentValue.exercises,
        0
      )
    }
  }

  console.log(course.totalExercises()
  )
  return <Course course={course} />
}

export default App