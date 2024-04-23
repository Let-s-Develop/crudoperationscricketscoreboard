import React, { useState } from "react";
import PlayerTable from "./PlayerTable";
import TeamDetails from "./TeamDetails";
import HorizontalScrollingText from "./HorizontalScrollingText";
import "./App.css";

function MatchSummaryTable({ team }) {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    const newRow = { player: '', role: '' };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = index => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };

  const handleInputChange = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    setRows(updatedRows);
  };

  return (
    <div className="match-summary-table">
      <h2>{team} Match Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.player}
                  onChange={e => handleInputChange(index, 'player', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.role}
                  onChange={e => handleInputChange(index, 'role', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleRemoveRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Player</button>
    </div>
  );
}

function App() {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [scrollingText, setScrollingText] = useState("");

  const updatePlayer = (team, id, newData) => {
    if (team === "team1") {
      setTeam1(
        team1.map((player) =>
          player.id === id ? { ...player, ...newData } : player
        )
      );
    } else if (team === "team2") {
      setTeam2(
        team2.map((player) =>
          player.id === id ? { ...player, ...newData } : player
        )
      );
    }
  };

  const addPlayer = (team) => {
    const newPlayer = {
      id: Math.random().toString(36).substr(2, 9),
      name: "",
      runs: 0,
      balls: 0,
      dots: 0,
      fours: 0,
      sixes: 0,
      twos: 0,
      ones: 0,
    };
    if (team === "team1") {
      setTeam1([...team1, newPlayer]);
    } else if (team === "team2") {
      setTeam2([...team2, newPlayer]);
    }
  };

  const removePlayer = (team, id) => {
    if (team === "team1") {
      setTeam1(team1.filter((player) => player.id !== id));
    } else if (team === "team2") {
      setTeam2(team2.filter((player) => player.id !== id));
    }
  };

  const updateScrollingText = (text) => {
    setScrollingText(text);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="d-flex justify-content-around">
          <div className="col-3">
            <img
              src="https://png.pngtree.com/png-clipart/20230518/original/pngtree-cricket-logo-vector-and-clipart-with-transparent-background-for-free-download-png-image_9163535.png"
              alt=""
              className="image-edit"
            />
          </div>
          <div className="col-9">
            <h1 className="heading-change">CRICKET SCORE BOARD</h1>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="row">
          <div className="col-sm-4">
          <PlayerTable
              team1={team1}
              team2={team2}
              onUpdate={updatePlayer}
              onAddPlayer={addPlayer}
              onRemovePlayer={removePlayer}
              updateScrollingText={updateScrollingText}
            />
          </div>
          
          <div className="col-sm-4">
            <TeamDetails
              team1={team1}
              team2={team2}
              updateScrollingText={updateScrollingText}
            />
          </div>
          <div className="col-sm-4">
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="true" aria-controls="collapseseven">
        Match Summary
      </button>
    </h2>
    <div id="collapseseven" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <MatchSummaryTable team="Team 1" />
            <MatchSummaryTable team="Team 2" />
      </div>
    </div>
  </div>
  </div>
           
          </div>
        </div>
      </div>

      <HorizontalScrollingText text={scrollingText} />
    </div>
  );
}

export default App;
