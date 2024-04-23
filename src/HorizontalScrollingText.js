import React, { useState } from 'react';

function HorizontalScrollingText() {
  // Define initial state for list items
  const [listItems, setListItems] = useState([
    { id: 1, text: 'score(60) (wickets-1)', backgroundColor: '#f0f0f0', textColor: '#333' },
    { id: 2, text: 'Batsman-1', backgroundColor: '#d9edf7', textColor: '#31708f' },
    { id: 3, text: 'Batsman-2', backgroundColor: '#fcf8e3', textColor: '#8a6d3b' },
    { id: 4, text: 'Team1 Vs team2', backgroundColor: '#dff0d8', textColor: '#3c763d' },
    { id: 5, text: 'required 20 runs score 10 balls to win', backgroundColor: '#f2dede', textColor: '#a94442' },
    { id: 6, text: 'requred rate 12.2', backgroundColor: '#fcf8e3', textColor: '#8a6d3b' },
    { id: 7, text: 'current rate 12.2', backgroundColor: '#dff0d8', textColor: '#3c763d' },
    { id: 8, text: 'overs 30.1', backgroundColor: '#d9edf7', textColor: '#31708f' },
    { id: 9, text: 'team1 win toss opted to ball first', backgroundColor: '#f0f0f0', textColor: '#333' },
    { id: 10, text: 'bolwername-name 20runs 3.1 overs', backgroundColor: '#f2dede', textColor: '#a94442' },
    // Add more initial items as needed
  ]);

  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        <ul className="scrolling-container">
          {/* Render list items dynamically */}
          {listItems.map(item => (
            <li key={item.id} className={`item-${item.id}`} style={{ backgroundColor: item.backgroundColor, color: item.textColor, padding: '10px', margin: '5px', borderRadius: '5px' }}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HorizontalScrollingText;
