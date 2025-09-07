// import styles from "./Course.module.css";
// import html from "../assets/react.svg";
import PropTypes from "prop-types";
import { Component, useState } from "react";
//npm install prop-types
// const course1 = "HTML"



function Course(props) {

    // let purchased = false;
    const [purchased, setPurchased] = useState(false);

    function clickHandle(discount,event){
        console.log(props.name, "button clicked",discount);
        console.log("event object",event);
        setPurchased(!purchased);
        console.log(purchased);
    }
// Which Component get re-rendered, based on that only useEffect function is called.

    
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
            <p>{purchased ? "Already Purchased": "Get it Now"}</p>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

Course.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number
};



export default Course;