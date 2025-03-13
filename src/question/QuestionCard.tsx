import React, {FC, useEffect} from "react";

type PropsType = {
    id: number;
    title: string;
    isPublished: boolean;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number) => void;
}

const QuestionCard: FC<PropsType> = props => {
    const {id, title, isPublished, deleteQuestion, editQuestion} = props

    useEffect(() => {
        console.log('mounted')
        return () => {
            console.log('unmounted')
            //销毁时会触发
        }
    }, [])

    //编辑
    function edit(id: number) {
        editQuestion(id)
    }

    //删除
    function del(id: number) {
        deleteQuestion(id)
    }

    return (
        <div key={id}>
            <strong>{title}</strong>
            &nbsp;
            {isPublished ? <span style={{color: 'green'}}>已发布</span> : <span style={{color: 'red'}} color={'red'}>未发布</span>}
            <button onClick={() => edit(id)}>编辑</button>
            <button onClick={() => del(id)}>删除</button>
        </div>
    )
}

export default QuestionCard;