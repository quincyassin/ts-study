import React, {FC, useState} from "react";
import {produce} from "immer";

const ImmerDemo:FC = () => {
    const [userInfo, setUserInfo] = useState({
        name: '小明',
        age: 20
    })

    // function changeAge() {
    //     setUserInfo({
    //         ...userInfo,
    //         age: 20
    //     })
    // }

    function changeAge() {
        setUserInfo(produce(user => {
            user.age = 22
        }))
    }

    return(
        <div>
            {JSON.stringify(userInfo)}
            <button onClick={changeAge}>change</button>
        </div>
    )
}

export default ImmerDemo;