import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response);
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-900 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
      <div className='p-5 mt-5 bg-gray-800'>
          hello
      </div>
    </div>
  )
}

export default App






























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