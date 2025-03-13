import React, {useEffect, useState} from "react";

function State() {
    //三个特性 (前两条见Button组件)
    // 1.改变会重新出发渲染
    // 2.可能会合并
    // 3.不可变数据，传入一个新值
    const [list, setList] = React.useState(['x', 'y']);

    const [userInfo, setUserInfo] = useState({name: '小明', age: 22})

    function changeAge() {
        setUserInfo({
            ...userInfo,
            age: 20
        })
        setList(list.concat('z'))
    }

    return(
        <div>
            {JSON.stringify(userInfo)}
            <button onClick={changeAge}></button>
            <strong>{list}</strong>
        </div>
    )
}

export default State;