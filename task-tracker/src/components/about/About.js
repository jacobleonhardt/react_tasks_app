import './about.scss'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <p>Version 1.0.0</p>
      <Link to='/'>Go Back</Link >
    </section>
  )
}

export default About
