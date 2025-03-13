import {FC, useRef} from "react";

const UseRefDemo: FC = () => {

    const copyRef = useRef<HTMLSpanElement>(null)

    function copy() {
        const current = copyRef.current;
        console.log(current)
        if (current) {
            navigator.clipboard.writeText(current.innerText)
                .then(() => alert("复制成功！"))
                .catch(err => console.error("复制失败:", err));
        }
    }

    return (
        <>
            <span ref={copyRef}>哈哈哈哈哈哈</span>
            <button onClick={copy}>复制</button>
        </>
    )
}
export default UseRefDemo;