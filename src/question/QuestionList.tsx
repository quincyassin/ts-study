import {useEffect, useState} from "react";
import QuestionCard from "./QuestionCard";

function QuestionList() {
    const [questions, setQuestions] = useState([
        {id: 1, title: '问卷1', isPublished: true},
        {id: 2, title: '问卷2', isPublished: false},
        {id: 3, title: '问卷3', isPublished: true}
    ]);


    useEffect(() => {
        console.log('加载请求')
    }, []) //初次渲染触发

    useEffect(() => {
        console.log('加载请求')
    }, [questions]) //依赖项更新才会触发

    function addQuestion() {
        const num = Number(Math.random().toString().slice(-3));

        setQuestions(
            questions.concat({
                id: num,
                title: '问卷' + num,
                isPublished: false,
            })
        )
    }

    function editQuestion(id: number) {
        setQuestions(
            questions.map(question => {
                if (question.id === id) {
                    return {
                        ...question,
                        isPublished: true,
                    }
                }
                return question;
            })
        )
    }

    function deleteQuestion(id: number) {
        setQuestions(questions.filter(question => question.id !== id))
    }

    return (
        <div>
            <h4>问卷列表</h4>
            <button onClick={addQuestion}>新增</button>
            <div>
                {questions.map(question => {
                    const {id, title, isPublished} = question
                    return (
                        <QuestionCard key={id} id={id} title={title} isPublished={isPublished} deleteQuestion={deleteQuestion}
                                      editQuestion={editQuestion}/>)
                })}
            </div>
        </div>
    )
}

export default QuestionList;