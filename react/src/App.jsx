import Navbar from "./components/Navbar";
import Rendering from "./components/Rendering";
import Home from "./Home";

export default function App(){
  return(
    <div>
      <Navbar/> 
      <h1>This is my React App</h1>
      <Home/>
      <Rendering/>
    </div>
  )
}