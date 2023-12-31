import { Rectangle } from 'recharts'
import { TypeCursor } from '../../Types'

const CustomCursor: React.FC<TypeCursor> = (props) => {
  const { points, width, height } = props
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      stroke="rgba(0,0,0,0.1)"
      x={x}
      y={y / 3}
      width={width}
      height={height * 2}
    />
  )
}
export default CustomCursor
