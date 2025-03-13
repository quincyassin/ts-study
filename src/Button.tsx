import React from "react";

function Button() {
    const [count, setCount] = React.useState(0);

    function add() {
        setCount(count + 1);
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={add}> + </button>
        </div>
    )
}

export default Button;