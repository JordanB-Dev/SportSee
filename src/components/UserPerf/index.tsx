import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../services'
import { TypePerformance } from '../../Types'

const { getUserPerformance } = API

const UserPerf: React.FC = () => {
  const [perf, setPerf] = useState<TypePerformance>([])
  const { id } = useParams<string>()

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
