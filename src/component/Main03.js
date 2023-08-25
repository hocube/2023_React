import { useState, useReducer } from "react";

export default function Main03() {
    const[count, setCount] = useState(0);
    function down() {
        setCount(count-1);
    }
    function reset() {
        setCount(0);
    }
    function up() {
        setCount(count+1);
    }

    // useState 방법
    // const[cnt,setCnt] = useState(0);

    // useReducer 방법
    function cntReduser(oldCnt, action) {
        if(action === 'DOWN'){
            return oldCnt - 1;
        }else if(action === 'RESET'){
            return 0;
        }else if(action === 'UP'){
            return oldCnt + 1;
        }else if(action.type === 'DOWN3'){
            return oldCnt - action.Number;
        }else if(action.type === 'RESET3'){
            return 0;
        }else if(action.type === 'UP3'){
            return oldCnt + action.Number;
        }
    }
    const[cnt, cntDispatch] = useReducer(cntReduser,0);
    function down2() {
        cntDispatch('DOWN');
    }
    function reset2() {
        cntDispatch('RESET');
    }
    function up2() {
        cntDispatch('UP');
    }

    function numReduser(oldNum, action) {
        if(action.type === 'DOWN'){
            return oldNum - action.number;
        }else if(action.type === 'RESET'){
            return 0;
        }else if(action.type === 'UP'){
            return oldNum + 1;
        }
    }

    const[number, setNumber] = useState(1);
    //const[num, numDispatch] = useReducer(numReduser,0);

    const[num, numDispatch] = useReducer(cntReduser,0);
    
    function down3() {
        // 여러 정보를 보내기 위해서 객체로 만들어자
        numDispatch({type:'DOWN3', number:number});
    }
    function reset3() {
        numDispatch({type:'RESE3T', number:number});
    }
    function up3() {
        numDispatch({type:'UP3', number:number});
    }
    function changeNumber(e) {
        setNumber(Number(e.target.value))
    }

    return(
        <div>
            <div>
                <h2>useState</h2>
                <input type="button" value="_" onClick={down} />
                <input type="button" value="초기화" onClick={reset} />
                <input type="button" value="+" onClick={up} />
            </div>

            {/* 해당 count는 버튼을 눌렀을 때 변경되야 하므로 useState를 사용 */}
            <div><h2 style={{margin:"20px"}}>{count}</h2></div>
            <div>
            <   h2>useReducer</h2>
                <input type="button" value="_" onClick={down2} />
                <input type="button" value="초기화" onClick={reset2} />
                <input type="button" value="+" onClick={up2} />
            </div>
            <div><h2 style={{margin:"20px"}}>{cnt}</h2></div>
            <div>
            <   h2>useReducer2</h2>
                <input type="button" value="_" onClick={down3} />
                <input type="button" value="초기화" onClick={reset3} />
                <input type="button" value="+" onClick={up3} />
                <input type="text" value={number} onChange={changeNumber} />
            </div>
            <div><h2 style={{margin:"20px"}}>{num}</h2></div>
        </div>
    );
}