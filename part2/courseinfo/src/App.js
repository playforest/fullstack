const Course = ({course}) => {
  const total = course.parts.reduce((accumulator, currentValue) => 
    accumulator + currentValue.exercises,
    0
  )

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total sum={total} /> <br></br>
    </div>
  )
}

const Header = ({ course }) => <h2>{course}</h2>

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  // const course = {
  //   id: 1,
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //       id: 1
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //       id: 2
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //       id: 3
  //     },
  //     {
  //       name: 'Redux',
  //       exercises: 11,
  //       id: 4
  //     }
  //   ],
  //   totalExercises: function() {
  //     return this.parts.reduce(
  //       (accumulator, currentValue) => 
  //       accumulator + currentValue.exercises,
  //       0
  //     )
  //   }
  // }


  return (
    <div>
      <h1>Web development curriculum</h1>
      {
        courses.map((course) => {
          return (
            <Course key={course.id} course={course} />
          )
        })
      }
    </div>
  )
}

export default App