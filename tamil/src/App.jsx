import './App.css'
import Course from './Course/Course'
import Footer from './Footer'
import NavBar from './NavBar'
import html from './assets/react.svg';
import css from './assets/css.png';


function App() {

  return (
    <>
      <Course name = {88} price = "$199" image={html} rating = {4}/>
      <Course name = "CSS" price = "$198" image={css} rating = {4.5}/>
      <Course name = "JS" price = "$199" image={html} rating = "4.6" />
    </>
  )
}

export default App
