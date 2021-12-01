import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");



  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
        </>
      ) : (
        <div className="login">
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}

    </div>
  );
}

export default App;
