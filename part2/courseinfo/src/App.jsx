

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

  return <Course courses={courses} />
}

export default App