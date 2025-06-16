import './App.css'
import Button from '@mui/material/Button';

function App() {
  let handleClick = ()=>{
    console.log("button was clicked!");
  };
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="text" onClick={handleClick}>Click Me!</Button>
      
    </>
  )
}

export default App
