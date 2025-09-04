// import styles from "./Course.module.css";
// import html from "../assets/react.svg";
import PropTypes from "prop-types";
//npm install prop-types
// const course1 = "HTML"



function Course(props) {
    function clickHandle(discount,event){
    console.log(props.name, "button clicked",discount);
    console.log("event object",event);
    }

    const intStyle  = {
        backgroundColor : 'blue',
    }
    return(
        <div className='card'>
        {/* for index.css */}
        {/* <div className={styles.card}>  for external css */}
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            {/* below is internal css */}
            <p style={intStyle}>{props.price}</p>
            <span>{props.rating}</span>
            <button onClick={(event) => clickHandle(20,event)}>Buy Now</button>
        </div>
    );
}

Course.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number
};



export default Course;