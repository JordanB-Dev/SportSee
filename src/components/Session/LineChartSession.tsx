// Component
import CustomToolTip from './CustomToolTip'
import CustomCursor from './CustomCursor'

// Librairie Rechart
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// Type TS
import { TypeSession } from '../../Types'

const LineChartSession = ({ data }: { data: TypeSession }) => {
  return (
    <>
      <ResponsiveContainer width="98%" height="100%">
        <LineChart data={data}>
          <CartesianGrid fill="#FF0000" stroke="#FF0000" />

          <XAxis
            dataKey="day"
            stroke="rgba(255,255,255,0.75)"
            tick={{ fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            dataKey="value"
            hide
            domain={['dataMin-10', 'dataMax+10']}
            padding={{ top: 20 }}
          />

          <Line
            type="natural"
            dataKey="value"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 3, strokeWidth: 2, stroke: 'white' }}
          />

          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>

          <Tooltip
            // eslint-disable-next-line
            // @ts-ignore
            cursor={<CustomCursor />}
            content={<CustomToolTip active={false} payload={[]} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default LineChartSession
