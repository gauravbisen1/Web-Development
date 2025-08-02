import React, { createContext } from 'react'

//creating context
 export const DataContext = createContext()

const UserContext = ({children}) => {//to get usercontext children
     
  const username = "Gaurav"
  const userData ={
    username: "Gaurav",
    age: 21,
    city:"Indore"
  }
  return (
    <div>
      {/* //to pass value write here */}
      <DataContext.Provider value={userData}>
      {children}
      </DataContext.Provider>
        
    </div>
  )
}

export default UserContext