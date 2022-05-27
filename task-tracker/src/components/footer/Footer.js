import './footer.scss'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022 | <Link to="/about"> About </Link></p>
    </footer>
  )
}

export default Footer
