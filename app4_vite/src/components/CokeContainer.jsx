import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCoke } from "../redux/coke/CokeActions";

function CokeContainer() {
    const numberOfCokes = useSelector((state) => state.coke.numberOfCokes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>CokeContainer</h1>
            <h3># of cokes = {numberOfCokes}</h3>
            <button onClick={() => dispatch(buyCoke())}>Buy Coke</button>
        </div>
    );
}

export default CokeContainer;
