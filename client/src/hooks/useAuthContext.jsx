import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextContext'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be used inside a WorkoutsContextProvider')
    }

    return context
}