import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.svg'

const Header = () => {
  return (
    <header>
      <nav>
        <img className="logo" src={Logo} alt="Logo" />
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </header>
  )
}

export default Header
