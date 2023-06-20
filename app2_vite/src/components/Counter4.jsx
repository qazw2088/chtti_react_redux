import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";

function Counter4() {
    const [title, setTitle] = useState("title");
    const [body, setBody] = useState("body");
    const [counter, setCounter] = useState(0);
    const [index, setIndex] = useState(1);
    const addCounter = () => {
        setCounter(counter + 1);
    };
    const addIndex = () => {
        setIndex(index + 1);
    };
    const URL = `https://jsonplaceholder.typicode.com/posts/${index}`;
    useEffect(() => {
        console.log("fetch data from server");
        axios
            .get(URL)
            .then((result) => {
                setTitle(result.data.title);
                setBody(result.data.body);
                // console.log("return value=", result);
            })
            .catch((reject) => {
                setTitle(reject.message);
                // console.log("oops, exception=", reject);
            });
    }, [index]);
    return (
        <div>
            <h3>Demo4</h3>
            <h4>counter={counter}</h4>
            <Button variant="contained" onClick={addCounter}>
                <Typography variant="button" style={{ textTransform: "none" }}>
                    Add Counter
                </Typography>
            </Button>

            <h4>{title}</h4>
            <h5>{body}</h5>
            <h4>index={index}</h4>
            <Button variant="contained" onClick={addIndex}>
                <Typography variant="button" style={{ textTransform: "none" }}>
                    Increase Index
                </Typography>
            </Button>
        </div>
    );
}

export default Counter4;
