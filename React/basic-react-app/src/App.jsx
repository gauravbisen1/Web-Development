import './App.css'
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./Activity.jsx";

function App() {
  return (
    <>
      <MsgBox userName="Gaurav" textColor="blue"/>
      <ProductTab/>
    </>
  );
}

export default App;
