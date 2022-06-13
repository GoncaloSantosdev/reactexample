import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent />
      </header>
    </div>
  );
}

function MyInfoComponent() {
  const [myName, setMyName] = useState('Gonçalo Santos');
  const [favoriteColor, setFavoriteColor] = useState('Red');
  const [favoriteMovies, setFavoriteMovies] = useState(['Rocky Balboa, ', ' Southpaw, ', ' Green Street Hooligan']);

  return (
    <div>
      <h1>{myName}</h1>
      <p>{favoriteColor}</p>
      {favoriteMovies}
      <br />
      <br />
      <input type="text" onChange={(e) => setMyName(e.target.value)}/>
      <input type="text" onChange={(e) => setFavoriteColor(e.target.value)}/>
      <input type="text" onChange={(e) => setFavoriteMovies(e.target.value)}/>
    </div>
  );
}

export default App;