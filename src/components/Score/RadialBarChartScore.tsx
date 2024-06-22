// Librairie Rechart
import { RadialBar, RadialBarChart } from 'recharts'

const RadialBarChartScore = ({ score }: { score?: number }) => {
  const data = [
    {
      name: 'score',
      value: score,
      fill: '#FF0000',
    },
  ]
  return (
    <>
      <RadialBarChart
        data={data}
        width={200}
        height={200}
        innerRadius={87}
        outerRadius={200}
        barSize={10}
        startAngle={215}
        /* eslint-disable  */
        // @ts-ignore
        endAngle={215 + -((score * 360) / 100)}
      >
        <RadialBar
          dataKey="value"
          cornerRadius={5}
          label={false}
          style={{ fill: 'red' }}
        />
        <circle cx={100} cy={100} r={82} fill="white" />
        <text x={100} y={100} textAnchor="middle">
          <tspan fontWeight={'bold'} fontSize={26} fill={'#282D30'}>
            {score ? `${score}%` : 'Chargement...'}
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={'#74798C'}>
            de votre
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={'#74798C'}>
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </>
  )
}

export default RadialBarChartScore
