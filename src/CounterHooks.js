import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";
//State and use state are asynchronous. WHich means if you want to use state, make sure you use 
//the previous state
export default function CounterHooks({ initialCount }) {
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
    <div>
        <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span>{count}</span>
        <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}