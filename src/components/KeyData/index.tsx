import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../services'
import Card from './Card'
import calories from '../../assets/images/energy.svg'

const { getKeyData } = API

const KeyData: React.FC = () => {
  const [keyState, setKeyState] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async (id?: string) => {
      const result = await getKeyData(id)
      setKeyState(result)
    }
    fetchData(id).catch(console.error)
  }, [id])

  return (
    <>
      <Card
        userKeyData={keyState?.calorieCount}
        unit="kCal"
        subtitle="Calories"
        className="calorie"
        logo={calories}
      />
    </>
  )
}

export default KeyData
