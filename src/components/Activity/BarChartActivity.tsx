// Librairie Rechart
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// Components
import CustomToolTip from './CustomToolTip'

// Type TS
import { TypeActivity } from '../../Types'

const BarChartActivity = ({ data }: { data: TypeActivity }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barGap={8}
        barCategoryGap={2}
        barSize={7}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tick={{ fill: '#9B9EAC' }}
          tickLine={false}
          stroke="#DEDEDE"
          strokeWidth={2}
          tickMargin={16}
        />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          tickMargin={30}
          tick={{ fill: '#9B9EAC' }}
          tickLine={false}
          axisLine={false}
          domain={['dataMin-2', 'dataMax+1']}
          tickCount={3}
        />
        <YAxis hide yAxisId="calories" />
        <Tooltip
          cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          content={<CustomToolTip active={false} payload={[]} />}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          yAxisId="kilogram"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          yAxisId="calories"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          height={80}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartActivity
