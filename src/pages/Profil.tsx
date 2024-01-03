import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../services'
import { TypeUser } from '../Types'
import UserInfos from '../components/UserInfos'
import Activity from '../components/Activity'
import Session from '../components/Session'
import UserPerf from '../components/UserPerf'
import Score from '../components/Score'
import KeyData from '../components/KeyData'

const { getUser } = API

const Profil: React.FC = () => {
  const [user, setUser] = useState<TypeUser>()
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async (id?: string) => {
      const user = await getUser(id)
      setUser(user)
    }
    fetchUser(id).catch(console.error)
  }, [id])

  return user ? (
    <main>
      <div className="profil container">
        <UserInfos firstName={user?.firstName} />
        <div className="dashboard">
          <div className="dashboard_left">
            <Activity />
            <div className="dashboard_bottom">
              <Session />
              <UserPerf />
              <Score />
            </div>
          </div>
          <div className="dashboard_aside">
            <KeyData />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <>
      <p>Error</p>
    </>
  )
}

export default Profil
