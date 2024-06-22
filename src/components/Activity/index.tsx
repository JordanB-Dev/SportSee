import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Services
import { API } from '../../services'
const { getUserActivity } = API

// Type TS
import { TypeActivity } from '../../Types'
import BarChartActivity from './BarChartActivity'

// The Activity Component is a bar chart that displays user activity. This component uses the URL parameter id (of type Number) to fetch the user data.
const Activity: React.FC = () => {
  const [state, setState] = useState<TypeActivity>([])
  const { id } = useParams<string>()

  useEffect(() => {
    const fetchActivity = async (id?: string) => {
      const activity = await getUserActivity(id)
      setState(activity)
    }
    fetchActivity(id).catch(console.error)
  }, [id])

  return (
    <>
      <BarChartActivity data={state} />
    </>
  )
}

export default Activity
