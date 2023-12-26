import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../../layout/Header'
import SideBar from '../../layout/Sidebar'

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
