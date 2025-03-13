function List() {

    const questionList = [
        {id: 'q1', title: '问卷1', isPublished: false},
        {id: 'q2', title: '问卷2', isPublished: true},
        {id: 'q3', title: '问卷3', isPublished: false},
    ]

    return <div>
        <ul>
            {questionList.map(question => {
                const {id, title, isPublished} = question;
                return (
                    <div>
                        <div key={id}><strong>{title}</strong></div>

                        {isPublished ? <span>已发布</span> : <span>未发布</span>}

                        <button>编辑问卷</button>
                    </div>
                );
            })}
        </ul>
    </div>
}

export default List