import React, { createContext } from 'react'

export const WorkoutsContext = createContext()

export const WorkoutsContextProvider = ({ children }) => {

    return (
        <WorkoutsContext.Provider>
            
        </WorkoutsContext.Provider>
    )
}

function WorkoutContext() {
  return (
    <div>WorkoutContext</div>
  )
}

export default WorkoutContext