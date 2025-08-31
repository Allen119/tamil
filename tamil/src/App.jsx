import './App.css'
import Course from './Course/Course'
import Footer from './Footer'
import NavBar from './NavBar'
import html from './assets/react.svg';
import css from './assets/css.png';


function App() {

  return (
    <>
      <Course name = "HTML" price = "$199" image={html}/>
      <Course name = "CSS" price = "$198" image={css}/>
      <Course name = "JS"/>
    </>
  )
}

export default App
