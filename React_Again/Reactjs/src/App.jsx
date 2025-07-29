const App = () => {
  const user = "Gaurav"
  const click = ()=>{
    console.log("button clicked...")
  }
  return (
    <div>
      <h1>Username - {user}</h1>
      <button onClick={click}>CLICK ME!</button>
    </div>
  )
}

export default App