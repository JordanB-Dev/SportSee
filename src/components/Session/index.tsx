import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../services'
import { TypeSession } from '../../Types'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomToolTip from './CustomToolTip'
import CustomCursor from './CustomCursor'

const { getUserSession } = API

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
    <div className="session">
      <h3 className="session_title">
        Durée moyenne des <br /> sessions
      </h3>

      <ResponsiveContainer width="98%" height="100%">
        <LineChart data={state}>
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
    </div>
  )
}

export default Session
