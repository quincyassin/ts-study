import React from "react";

function Button() {
    const [count, setCount] = React.useState(0);
    //useState会触发组件的重新渲染
    //如果一个变量不用于显示，可以用useRef

    function add() {
        setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        //会合并 因为异步总是0+1
        setCount(count => count + 1)
        //函数不会合并

        console.log('current count = ' + count)
        //异步更新，无法拿到最新的count
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={add}> + </button>
        </div>
    )
}

export default Button;