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

  export default Course