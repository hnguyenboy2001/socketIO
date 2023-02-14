import logo from './logo.svg';
import './App.css';
import {useRef , useEffect} from "react";
import { io } from "socket.io-client";

function App() {
  const socket = useRef();
  useEffect(()=>{
    socket.current = io("ws://localhost:8900");
  },[])
  
  const handleCheckEmit = ()=>{
    socket.current.emit("Client-CheckEmit","HelloWorld !");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='Check-emit' onClick={handleCheckEmit}>Emit to server</button>
        {/* {socket.current.on("Server-checkEmit", (data)=>{
          return ( <div><p className='Message'>{data}</p></div>)
        })} */}
       
      </header>
    </div>
  );
}

export default App;
