// import styles from "./Course.module.css";
const course1 = "HTML"
function Course() {
    const intStyle  = {
        backgroundColor : 'blue',
    }
    return(
        <div className='card'>
        {/* for index.css */}
        {/* <div className={styles.card}>  for external css */}
            <img src="" alt="" />
            <h3>{course1}</h3>
            {/* below is internal css */}
            <p style={intStyle}>This is code io's HTML course</p>
        </div>
    );
}

export default Course;