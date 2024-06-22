import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Service
import { API } from '../../services'
import RadialBarChartScore from './RadialBarChartScore'
const { getScore } = API

// The Score Component is a radial bar chart that displays user score.
const Score: React.FC = () => {
  const [score, setScore] = useState<number | undefined>(1)
  const { id } = useParams<string>()

  useEffect(() => {
    const fetchScore = async (id?: string) => {
      const score = await getScore(id)
      setScore(score)
    }
    fetchScore(id).catch(console.error)
  }, [id])

  return (
    <>
      <RadialBarChartScore score={score} />
    </>
  )
}

export default Score
