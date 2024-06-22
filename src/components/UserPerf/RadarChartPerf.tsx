// Librairie Rechart
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

//Type TS
import { TypePerformance } from '../../Types'

const RadarChartPerf = ({ data }: { data: TypePerformance }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data!.reverse()}>
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
    </>
  )
}

export default RadarChartPerf
