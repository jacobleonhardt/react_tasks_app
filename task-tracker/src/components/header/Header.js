import './header.scss'

const Header = ({ displayForm }) => {
  return (
    <header className="header">
      <h1>Task Trackr</h1>
      <button className="header__btn" onClick={displayForm}>Add</button>
    </header>
  )
}

export default Header
