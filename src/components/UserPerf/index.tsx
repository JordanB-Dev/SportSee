import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../services'
const { getUserPerformance } = API

const UserPerf: React.FC = () => {
  const [perf, setPerf] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchPerformance = async (id?: string) => {
      const performance = await getUserPerformance(id)
      setPerf(performance)
      console.log(performance)
    }
    fetchPerformance(id).catch(console.error)
  }, [id])

  return <> {console.log(perf)} </>
}

export default UserPerf
