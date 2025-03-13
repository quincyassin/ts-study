const TsxBase = () => {
     const fn = (a: number, b: number) => {
         //参数类型
         console.log(a + b);
     }
     fn(100, 200);

    const flag = true;

     function Hello() {
         if (flag) return <p>Hello</p>;
         return <p>你好</p>;
     }

     function fn1<T>(b: T) {
         //范型
     }

     fn1<number>(1);

    const list = [
        {username: 'zhangsan', name: '张三'},
        {username: 'lisi', name: '里斯'}
    ]

    return (
        <div>
            Hello
            <ul>
                {list.map(user => {
                    //解构
                    const { username, name } = user;
                    return <li key={username}>{name}</li>;
                })}
            </ul>
            <button onClick={() => {
                fn(10, 20)
            }}></button>
            <Hello/>
        </div>
    )
}

export default TsxBase;

