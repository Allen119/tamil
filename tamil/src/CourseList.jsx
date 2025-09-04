import Course from './Course/Course'
import html from './assets/react.svg';
import css from './assets/css.png';
import { useState } from "react";



function CourseList() {

    const [courses, setCourses] = useState([
        {   
            id: 1,
            name: "HTML",
            price: "$199",
            image: html,
            rating: 4
        },
        {
            id: 2,
            name: "CSS",
            price: "$198",
            image: css,
            rating: 4.5
        }, {
            id: 3,
            name: "JS",
            price: "$199",
            image: html,
            rating: 4.6
        }
    ]);
    courses.sort((obj1, obj2) => obj2.rating - obj1.rating);
    const courseFil = courses.filter((course) => course.rating >= 4);

    function handleDelete(id) {
        const newCourses = courseFil.filter((course) => course.id != id);
        setCourses(newCourses);
    }

    const courseList = courseFil.map((course) =>
        <Course
            key={course.id}
            name={course.name}
            price={course.price}
            image={course.image}
            rating={course.rating}
            onDelete={() => handleDelete(course.id)}
        />
    );
    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList;