import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../services'
import { TypeSession } from '../../Types'

const { getUserSession } = API

const Session: React.FC = () => {
  const [state, setState] = useState<TypeSession>([])
  const { id } = useParams<string>()

  useEffect(() => {
    const fetchSession = async (id?: string) => {
      const sessions = await getUserSession(id)
      setState(sessions)
    }
    fetchSession(id).catch(console.error)
  }, [id])

  return (
    <div className="session">
      {' '}
      <h3 className="session_title">
        Durée moyenne des <br /> sessions
      </h3>
    </div>
  )
}

export default Session
