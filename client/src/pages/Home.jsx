import React, { useEffect, useState } from 'react'
// import axios from 'axios'

function Home() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts/')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
    
    // axios.get('http://localhost:4000/api/workouts/')
    // .then(result => setWorkouts(result.data))
    // .catch(err => console.log(err))
  }, [])

  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home