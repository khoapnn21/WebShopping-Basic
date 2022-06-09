import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculator  from "./feature/calculator/Calculator";


function App() {
  const [isActive, setIsActive] = useState(false)

  const handleShow = () => {
    
    setIsActive(!isActive )
  }
  

  return (
    <>
      <button onClick={handleShow} > {!isActive ? 'Open' : 'Close'}</button>
      {isActive && <Calculator />}

    </>
  );
}


export default App;
