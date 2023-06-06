import { useState } from "react";

export default function MyButton(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
        alert("You Clicked me!");
    }

    return (
        <button onClick={handleClick}>
            Click me! Clicks so far: {count}
        </button>
    );
}