import './header.scss'
import { FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Header = ({ displayForm, displayButtonText }) => {
  const currentPage = useLocation()

  return (
    <header className="header">
      <h1>Task Trackr</h1>
     { currentPage.pathname === '/'
      && <button className="header__btn" onClick={displayForm}>
        { displayButtonText ? <FaTimes />  : "Add"}
      </button> }
    </header>
  )
}

export default Header
