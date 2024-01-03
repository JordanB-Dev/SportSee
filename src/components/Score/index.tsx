import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../services'
const { getScore } = API

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

  return <div className="score"></div>
}

export default Score
