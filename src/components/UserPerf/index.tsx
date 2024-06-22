import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Services
import { API } from '../../services'
const { getUserPerformance } = API

//Type TS
import { TypePerformance } from '../../Types'

// Component
import RadarChartPerf from './RadarChartPerf'

// The Performance Component is a radar chart that displays user performance.
const UserPerf: React.FC = () => {
  const [perf, setPerf] = useState<TypePerformance>([])
  const { id } = useParams<string>()

  useEffect(() => {
    const fetchPerformance = async (id?: string) => {
      const performance = await getUserPerformance(id)
      setPerf(performance)
    }
    fetchPerformance(id).catch(console.error)
  }, [id])

  return (
    <>
      <RadarChartPerf data={perf} />
    </>
  )
}

export default UserPerf
