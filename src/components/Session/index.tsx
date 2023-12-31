import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../services'
const { getUserSession } = API

const Session: React.FC = () => {
  const [state, setState] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchSession = async (id?: string) => {
      const sessions = await getUserSession(id)
      setState(sessions)
    }
    fetchSession(id).catch(console.error)
  }, [id])

  return <div className="session">{console.log(state)}</div>
}

export default Session
