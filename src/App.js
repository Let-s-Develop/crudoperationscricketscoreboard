// App.js
import React, { useState } from 'react';
import PlayerTable from './PlayerTable';
import TeamDetails from './TeamDetails';
import './App.css';

function App() {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const updatePlayer = (team, id, newData) => {
    if (team === 'team1') {
      setTeam1(team1.map(player => (player.id === id ? { ...player, ...newData } : player)));
    } else if (team === 'team2') {
      setTeam2(team2.map(player => (player.id === id ? { ...player, ...newData } : player)));
    }
  };

  const addPlayer = (team) => {
    const newPlayer = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      name: '',
      runs: 0,
      balls: 0,
      dots: 0,
      fours: 0,
      sixes: 0,
      twos: 0,
      ones: 0,
    };
    if (team === 'team1') {
      setTeam1([...team1, newPlayer]);
    } else if (team === 'team2') {
      setTeam2([...team2, newPlayer]);
    }
  };

  const removePlayer = (team, id) => {
    if (team === 'team1') {
      setTeam1(team1.filter(player => player.id !== id));
    } else if (team === 'team2') {
      setTeam2(team2.filter(player => player.id !== id));
    }
  };

  return (
    <div className="App">
      <div class="row">
        <div class="col-md-4">
        <img src="https://png.pngtree.com/png-clipart/20230518/original/pngtree-cricket-logo-vector-and-clipart-with-transparent-background-for-free-download-png-image_9163535.png" alt="" class="image-edit"/>
        </div>
        <div class="col-md-4">
        <h1 class="heading-change">CRICKET SCORE BOARD</h1>
        </div>
        
      </div>
     
       
     
      <PlayerTable
        team1={team1}
        team2={team2}
        onUpdate={updatePlayer}
        onAddPlayer={addPlayer}
        onRemovePlayer={removePlayer}
      />
      <TeamDetails team1={team1} team2={team2} />

    </div>
    
  );
}

export default App;
