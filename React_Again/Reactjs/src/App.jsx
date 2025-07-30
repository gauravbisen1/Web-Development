import React from 'react'
import  Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

const App = () => {
  const user = "Gaurav"
  return (
    <>
      <Navbar/>
      <div className='p-10'>
        <Card user="Gaurav" age="22" city="indore"/>
      </div>
      <Footer />
    </>
  )
}

export default App






















// import React, { useState } from 'react'

// const App = () => {
//   const [username, setusername] = useState("")

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(username)
//     setusername("")
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//           <input value={username} onChange={
//             (e)=>{
//               setusername(e.target.value)
//             }
//           } placeholder='Enter your name' type="text" className=' rounded text-xl m-5 border'/>
//           <button className='rounded '>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App