import React, { useState, useEffect } from 'react';

function Demo_A30() {
  const [dishCounter, setDishCounter] = useState(5);
  const [bowCounter, setBowCounter] = useState(3);
  const [showDishMessage, setShowDishMessage] = useState(false);
  const [showBowMessage, setShowBowMessage] = useState(false);
  function useADish() {
    setDishCounter(dishCounter + 1);
  }
  function cleanDish() {
    setDishCounter(0);
    setShowDishMessage(false);
  }
  function useABow() {
    setBowCounter(bowCounter + 1);
  }
  function cleanBow() {
    setBowCounter(0);
    setShowBowMessage(false);
  }

  useEffect(() => {
    if (dishCounter >= 10) {
      setShowDishMessage(true);
    } else {
      setShowDishMessage(false);
    }
    if (bowCounter >= 10) {
      setShowBowMessage(true);
    } else {
      setShowBowMessage(false);
    }
  }, [dishCounter, bowCounter]);

  let counter = 20;
  function changeCounter() {
    counter += 1;
    console.log(`[Counter1]counter=${counter}`);
  }
  return (
    <div>
      <h1>Demo_A30</h1>
      <h3>Dish={dishCounter}</h3>
      <button onClick={useADish}> Use a dish</button>
      <button onClick={cleanDish}> Clean all dish</button>
      {showDishMessage && <h4 style={{ color: 'red' }}>Clean dish!</h4>}
      <h3>Bow={bowCounter}</h3>
      <button onClick={useABow}> Use a bow</button>
      <button onClick={cleanBow}> Clean all bow</button>
      {showBowMessage && <h4 style={{ color: 'red' }}>Clean bow!</h4>}
      <h3>Counter1={counter}</h3>

      <button
        onClick={() => {
          changeCounter();
        }}
      >
        Add1
      </button>
    </div>
  );
}

export default Demo_A30;
