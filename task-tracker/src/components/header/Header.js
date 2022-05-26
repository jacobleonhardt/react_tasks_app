import './header.scss'
import { FaTimes } from 'react-icons/fa'

const Header = ({ displayForm, displayButtonText }) => {
  return (
    <header className="header">
      <h1>Task Trackr</h1>
      <button className="header__btn" onClick={displayForm}>{ displayButtonText ? <FaTimes />  : "Add"}</button>
    </header>
  )
}

export default Header
