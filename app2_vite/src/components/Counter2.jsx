import React from "react";
import { useReducer } from "react";
function Counter2() {
  const initState = {
    dishCounter: 0,
    showDishMessage: false,
    bowCounter: 0,
    showBowMessage: false,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  function reducer(state, action) {
    let bowNeedWash = false;
    let dishNeedWash = false;
    switch (action.type) {
      case "useDish":
        if (state.dishCounter >= 9) {
          dishNeedWash = true;
        }
        return {
          ...state,
          dishCounter: state.dishCounter + 1,
          showDishMessage: dishNeedWash,
        };
      case "useBow":
        if (state.bowCounter >= 9) {
          bowNeedWash = true;
        }
        return {
          ...state,
          bowCounter: state.bowCounter + 1,
          showBowMessage: bowNeedWash,
        };
      case "washDish":
        return { ...state, dishCounter: 0, showDishMessage: false };
      case "washBow":
        return { ...state, bowCounter: 0, showBowMessage: false };
      default:
        return state;
    }
  }
  return (
    <div>
      <h3>use {state.dishCounter} dish</h3>
      <button
        onClick={() => {
          dispatch({ type: "useDish" });
        }}
      >
        use dish
      </button>
      <button
        onClick={() => {
          dispatch({ type: "washDish" });
        }}
      >
        wash dish
      </button>
      {state.showDishMessage && <h4 style={{ color: "red" }}>Clean dish!</h4>}
      <h3>use {state.bowCounter} bow</h3>
      <button
        onClick={() => {
          dispatch({ type: "useBow" });
        }}
      >
        use bow
      </button>
      <button
        onClick={() => {
          dispatch({ type: "washBow" });
        }}
      >
        wash bow
      </button>
      {state.showBowMessage && <h4 style={{ color: "red" }}>Clean bow!</h4>}
    </div>
  );
}

export default Counter2;
