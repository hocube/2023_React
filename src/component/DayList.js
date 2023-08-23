import dummy from "../db/data.json"

export default function DayList() {
    // console.log(dummy);

    // json 같은 반복 처리할 때는 주로 map()을 사용한다.
    return(
            <ul className="list_day">
                {dummy.days.map(day => (
                    <li key={day.id}> Day {day.day} </li>
                ))}
            </ul>
        );
}