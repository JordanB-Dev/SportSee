import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../services'
import UserInfos from '../components/Userinfos'
import { TypeUser } from '../Types'
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

  return (
    <main>
      <div className="profil container">
        <UserInfos firstName={user?.firstName} />
      </div>
    </main>
  )
}

export default Profil
