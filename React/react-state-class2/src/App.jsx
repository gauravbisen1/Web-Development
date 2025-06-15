import Lottery from './Lottery'
import './App.css'
import { sum } from './helper'

function App() {
  let winCondition = (ticket) =>{
    return sum(ticket) === 15; //num sum is 15
    // return ticket.every((num) => num === ticket[0]); //all num will same
    // return ticket[0] === 0;
  }
   return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
