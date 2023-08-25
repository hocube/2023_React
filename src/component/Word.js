import { useState } from "react";

// 객체이기 때문에 props에 사용되는 이름 그대로 사용
export default function Word({word}) {
    // 보였다가 안 보였다가 하기 위해서
    // useState를 사용해야 한다.
    // isShow 상태값을 만들어주고, props로 word를 받아와
    // isShow가 true일 때만 보이게 한다.

    // 초기값 안 보이게 하려면 false
    const[isShow, setInShow] = useState(false);
    function toggleShow() {
        setInShow(! isShow)
    }
    return(
    <tr>
        <td><input type="checkbox" /></td>
        <td>{word.eng}</td>
        {/* 둘 다 true일 때만 보인다. */}
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow} style={{marginRight:"20px"}}>뜻 {isShow? '숨기기' : '보기'}</button>
            <button style={{color:"red"}}>삭제</button>
        </td>
    </tr>
    );
}