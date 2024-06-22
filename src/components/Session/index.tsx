import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Services
import { API } from '../../services'
const { getUserSession } = API
import LineChartSession from './LineChartSession'

// Type TS
import { TypeSession } from '../../Types'

// The Session Component is a line chart that displays user session.
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
    <>
      <LineChartSession data={state} />
    </>
  )
}

export default Session
