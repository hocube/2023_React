import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main01 from "./component/Main01";
import Main02 from "./component/Main02";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";

//1.App을 BrowserRouter로 감싼다.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <h1> REACT 연습하기 </h1>
          <hr />
          <button style={{marginLeft:"20px"}}><Link to="/main01"> Main01 </Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/main02"> Main02 </Link></button>
    </div>
    <Routes>
      <Route path="/" />
      <Route path="/main01" element={<Main01 />} />
      <Route path="/main02" element={<Main02 />} />
      <Route path="day/:day" element={<Day />} />
      <Route path="daylist" element={<DayList />} />
      {/* 이 외에 url이 들어오면 받아들이는 페이지 */}
      <Route path="/*" element={<EmptyPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
