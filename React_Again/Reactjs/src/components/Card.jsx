import React from 'react'

const Card = (props) => {
    //console.log(props)
  return (
    <div className='bg-white text-black inline-block p-6 text-center rounded'>
        <h1 >{props.user} Surname</h1>
        <h2 >{props.city},{props.age}</h2>
        <button >Add Friend</button>
    </div>
  )
}

export default Card 