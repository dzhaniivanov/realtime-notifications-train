import './App.css';
import { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { posts } from "./data";
import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log(socket)

  }, [])



  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
          <span className="username">{user}</span>
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
