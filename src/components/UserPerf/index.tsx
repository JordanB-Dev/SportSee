import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../services'
import { TypePerformance } from '../../Types'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

const { getUserPerformance } = API

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
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={perf!.reverse()}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: 'white', fontSize: 12, fontWeight: '500' }}
            offset={100}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UserPerf
