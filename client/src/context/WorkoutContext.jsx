import React, { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })

  dispatch({type: 'SET_WORKOUT', payload: [{}, {}]})

  return (
    <WorkoutsContext.Provider value={ }>
      {children}
    </WorkoutsContext.Provider>
  )
}

// function WorkoutContext() {
//   return (
//     <div>WorkoutContext</div>
//   )
// }

// export default WorkoutContext