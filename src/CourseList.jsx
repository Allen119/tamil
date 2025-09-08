import Course from './Course/Course'
import { useState, useEffect } from "react";



function CourseList() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
        .then((response) => {
            console.log("response",response);
            return response.json();

        }).then((data) => {setCourses(data);});
    }, []);
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
    if (!courses){
        return <>
        </>
    }
    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList;

//npx json-server --watch data/dummyData.json --port 3000 --static ./data