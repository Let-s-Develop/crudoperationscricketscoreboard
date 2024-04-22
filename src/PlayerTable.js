import React from 'react';


const PlayerTable = ({ team1 = [], team2 = [], onUpdate, onAddPlayer, onRemovePlayer }) => {
  // Function to handle updating player data
  const handleUpdate = (team, id, field, value) => {
    onUpdate(team, id, { [field]: value });
  };

  // Function to handle updating player name
  const handleNameChange = (team, id, newName) => {
    onUpdate(team, id, { name: newName });
  };

  return (
    <div className="player-table p-1">
      <div className="team">
        <h2>Team 1</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Dots</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {team1.map(player => (
              <tr key={player.id}>
                <td contentEditable="true" onBlur={(e) => handleNameChange('team1', player.id, e.target.innerText)}>
                  {player.name}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team1', player.id, 'runs', parseInt(e.target.innerText))}>
                  {player.runs}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team1', player.id, 'balls', parseInt(e.target.innerText))}>
                  {player.balls}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team1', player.id, 'dots', parseInt(e.target.innerText))}>
                  {player.dots}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team1', player.id, 'fours', parseInt(e.target.innerText))}>
                  {player.fours}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team1', player.id, 'sixes', parseInt(e.target.innerText))}>
                  {player.sixes}
                </td>
                <td>{((player.runs / player.balls) * 100).toFixed(2)}</td>
                <td>
                  <button onClick={() => onRemovePlayer('team1', player.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-edit-2" onClick={() => onAddPlayer('team1')}>Add Player</button>
      </div>

      <div className="team p-1">
        <h2>Team 2</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th> 
              <th>Runs</th>
              <th>Balls</th>
              <th>Dots</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {team2.map(player => (
              <tr key={player.id}>
                <td contentEditable="true" onBlur={(e) => handleNameChange('team2', player.id, e.target.innerText)}>
                  {player.name}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team2', player.id, 'runs', parseInt(e.target.innerText))}>
                  {player.runs}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team2', player.id, 'balls', parseInt(e.target.innerText))}>
                  {player.balls}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team2', player.id, 'dots', parseInt(e.target.innerText))}>
                  {player.dots}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team2', player.id, 'fours', parseInt(e.target.innerText))}>
                  {player.fours}
                </td>
                <td contentEditable="true" onBlur={(e) => handleUpdate('team2', player.id, 'sixes', parseInt(e.target.innerText))}>
                  {player.sixes}
                </td>
                <td>{((player.runs / player.balls) * 100).toFixed(2)}</td>
                <td>
                  <button  onClick={() => onRemovePlayer('team2', player.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-edit-2" onClick={() => onAddPlayer('team2')}>Add Player</button>
      </div>
    </div>
  );
};

export default PlayerTable;
