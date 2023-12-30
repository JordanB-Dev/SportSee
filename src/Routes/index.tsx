import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profil from '../pages/Profil'

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profil/:id" element={<Profil />} />
    </Routes>
  )
}

export default routes
