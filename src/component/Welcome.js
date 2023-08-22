import styles from "./Welcome.module.css";

const Welcome = () => {
    // 이런 모양 보이면 당황하지 말고 function이구나 생각하기
    return(
        <div>
            <h2 className={styles.fg}>Welcome</h2>
            <div className={styles.box}></div>
        </div>
    )
}
//깃 연습
export default Welcome;