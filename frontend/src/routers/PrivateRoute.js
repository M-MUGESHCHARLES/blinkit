import React from 'react'
import { useDataContext } from '../context/context'

export const PrivateRoute = ({children}) => {
    const {isAuth} = useDataContext();
  return (
    // {isAuth ? 'hi': 'hello' }
    <>hello</>
  )
}
