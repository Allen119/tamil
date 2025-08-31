// import styles from "./Course.module.css";
import html from "../assets/react.svg";
// const course1 = "HTML"
function Course({ name = "code IO course", image = html, price = 456 }) {
    const intStyle  = {
        backgroundColor : 'blue',
    }
    return(
        <div className='card'>
        {/* for index.css */}
        {/* <div className={styles.card}>  for external css */}
            <img src={image} alt="" />
            <h3>{name}</h3>
            {/* below is internal css */}
            <p style={intStyle}>{price}</p>
        </div>
    );
}


export default Course;