const Course = ({courses}) => {
    return(
    <div>
      {courses.map(course => 
      <div key={course.id}>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
      </div>
      )}
    </div>
    )
  }
  
  const Header = ({header}) => {
    return(
      <h1>{header}</h1>
    )
  }
  
  const Content = ({parts}) => {
    return(
      <div>
        {parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        )}
        <p>Total Exercises: {parts.reduce((acc, part) => part.exercises + acc, 0)}</p>
      </div>
    )
  }

  export default Course