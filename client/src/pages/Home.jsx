import React, { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// import axios from 'axios'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

function Home() {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts/')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
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
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home