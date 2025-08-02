import React, { useContext } from 'react'
import One from './components/one'
import Two from './components/two'
import { DataContext } from './context/UserContext'

const App = () => {
  const data = useContext(DataContext)
  return (
    <div>   
      <h1>This is app {data.username}</h1>     
      <h1>This is app {data.city}</h1>  
      <h1>This is app {data.age}</h1>
      <One/>
      <Two/>
    </div>
  )
}

export default App































//routing
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Product from './pages/Product'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import Navbar from './components/Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//        <Routes>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/product' element={<Product/>}/>
//        </Routes>
//     </div>
//   )
// }

// export default App


















// get data from api
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData = async ()=>{
//     const response = await axios.get('https://picsum.photos/v2/list');
//     setData(response.data)
//     // console.log(data)
//   }

//   useEffect(() => {
//     getData()
//   }, [])
  

//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-teal-900 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-800'>
//           {data.map(function(elem,idx){
//             return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//               <img className='h-40' src={elem.download_url} alt="" />
//               <h1>{elem.author}</h1>
//             </div>
//           })}
//       </div>
//     </div>
//   )
// }

// export default App






























//cardsssssssssssssssssssssssssss
// import React from 'react'
// import  Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Card from './components/Card'

// const App = () => {

//   const user = [
//     {
//       "name": "Aarav Singh",
//       "age": 28,
//       "city": "Bengaluru",
//       "profession": "Software Engineer",
//       "profile_photo": "https://randomuser.me/api/portraits/men/75.jpg"
//     },
//     {
//       "name": "Meera Patel",
//       "age": 32,
//       "city": "Ahmedabad",
//       "profession": "UI/UX Designer",
//       "profile_photo": "https://randomuser.me/api/portraits/women/65.jpg"
//     },
//     {
//       "name": "Rahul Sharma",
//       "age": 24,
//       "city": "Delhi",
//       "profession": "Digital Marketer",
//       "profile_photo": "https://randomuser.me/api/portraits/men/34.jpg"
//     },
//     {
//       "name": "Ananya Rao",
//       "age": 30,
//       "city": "Hyderabad",
//       "profession": "Data Scientist",
//       "profile_photo": "https://randomuser.me/api/portraits/women/21.jpg"
//     },
//     {
//       "name": "Vikram Joshi",
//       "age": 27,
//       "city": "Pune",
//       "profession": "Product Manager",
//       "profile_photo": "https://randomuser.me/api/portraits/men/53.jpg"
//     }
//   ]

//   return (
//     <>
//       <Navbar/>
//       <div className='p-10'>
//         {user.map(function(elem,idx){
//           return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profile_photo}   />
//         })}
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App






















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