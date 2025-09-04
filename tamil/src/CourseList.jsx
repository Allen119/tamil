import Course from './Course/Course'
import html from './assets/react.svg';
import css from './assets/css.png';



function CourseList() {

    const courses = [
        {name: "HTML",
         price: "$199",
         image: html,
         rating: 4},
         {
            name: "CSS",
            price: "$198",
            image: css,
            rating: 4.5
         },{
            name: "JS",
            price: "$199",
            image: html,
            rating: 4.6
         }
    ]; 
    courses.sort( (obj1,obj2) => obj2.rating - obj1.rating );
    const courseFil = courses.filter((course) => course.rating >= 4 );
    const courseList = courseFil.map( (course,index) => 
        <Course key={index}
                // index is just for key prop  
                name = {course.name} 
                price = {course.price} 
                image={course.image} 
                rating = {course.rating}/>);
    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList;