import styles from "./App.css";
import { useState } from "react";

const heavyWork = () => {
  console.log("heavyWork");
}

function App() {
  const[names, setNames] = useState(['홍길동', '임꺽정']);
  const[input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
    const handleUpload = () => {
      // setNames(['홍길동', '임꺽정' input]);
      // 이전 상태값에 현재 값을 추가하고 싶다.
      // prevState => 이전 state 상태값을 기억하고 있는 변수
      setNames((prevState)=>{
        return ([...prevState, input])
      })
    }
  return (
    <div className="App">
     <input type='text' value={input} onChange={handleInputChange} />
     <button onClick={handleUpload}>upload</button>
      {/* 배열이다. */}
      {/* {names} : 이렇게 하면 홍길동임꺽정 이렇게 한번에 나옴 */}

     {/* 배열일 경우 하나씩 호출하는 방법 */}
     {names.map((name,idx) =>  {
      return <p key={idx}>{name}</p>
      })}
    </div>
  );
}
export default App;