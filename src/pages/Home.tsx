import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <NavLink className="link" to="/profil/12">
        Karl Dovineau
      </NavLink>
      <NavLink className="link" to="/profil/18">
        Cecilia Ratorez
      </NavLink>
    </div>
  )
}

export default Home
