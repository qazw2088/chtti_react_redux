import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyFanta } from "../redux/fanta/FantaActions";

function FantaContainer() {
    const numberOfFanta = useSelector((state) => state.fanta.numberOfFantas);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>FantaContainer</h1>
            <h3># of fanta= {numberOfFanta}</h3>
            <button onClick={() => dispatch(buyFanta())}>Buy Fanta</button>
        </div>
    );
}

export default FantaContainer;
