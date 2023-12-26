import { NavLink } from 'react-router-dom'
import Relax from '../assets/images/Relax.svg'
import Swimming from '../assets/images/Swimming.svg'
import Fitness from '../assets/images/Fitness.svg'
import Bike from '../assets/images/Bike.svg'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_icon">
        <NavLink to="#">
          <img src={Relax} alt="relax" />
        </NavLink>
        <NavLink to="#">
          <img src={Swimming} alt="Swimming" />
        </NavLink>
        <NavLink to="#">
          <img src={Fitness} alt="Fitness" />
        </NavLink>
        <NavLink to="#">
          <img src={Bike} alt="Bike" />
        </NavLink>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  )
}

export default SideBar
