import React, { useState, useEffect } from 'react';

function HorizontalScrollingText() {
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
  ]);

  // State to control scrolling
  const [scrollPaused, setScrollPaused] = useState(false);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (!scrollPaused) {
        // Scroll to the end of the list
        const container = document.querySelector('.scrolling-container');
        container.scrollLeft = container.scrollWidth - container.clientWidth;
      }
    };

    // Event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPaused]);

  // Function to handle input change for a list item
  const handleInputChange = (index, key, value) => {
    const updatedListItems = [...listItems];
    updatedListItems[index][key] = value;
    setListItems(updatedListItems);
  };

  // Function to handle input focus
  const handleInputFocus = () => {
    // Pause scrolling when input is focused
    setScrollPaused(true);
  };

  // Function to handle input blur
  const handleInputBlur = () => {
    // Resume scrolling when input is blurred
    setScrollPaused(false);
  };

  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        <ul className="scrolling-container">
          {/* Render list items dynamically */}
          {listItems.map((item, index) => (
            <li key={item.id} className={`item-${item.id}`} style={{ backgroundColor: item.backgroundColor, color: item.textColor, padding: '10px', margin: '5px', borderRadius: '5px' }}>
              <input
                type="text"
                value={item.text}
                onChange={(e) => handleInputChange(index, 'text', e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Enter text"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HorizontalScrollingText;
