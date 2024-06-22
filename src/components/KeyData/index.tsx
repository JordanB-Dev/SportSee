import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Serviced
import { API } from '../../services'
const { getKeyData } = API
//Components
import Card from './Card'
//SVG
import calories from '../../assets/images/energy.svg'
import proteins from '../../assets/images/chicken.svg'
import carbs from '../../assets/images/apple.svg'
import fat from '../../assets/images/cheeseburger.svg'
// Type TS
import { TypeCard } from '../../Types'

// The KeyData component reuses the Card component multiple times.
const KeyData: React.FC = () => {
  const [keyState, setKeyState] = useState<TypeCard>()
  const { id } = useParams<string>()

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
      <Card
        userKeyData={keyState?.proteinCount}
        unit="g"
        subtitle="Proteines"
        className="protein"
        logo={proteins}
      />
      <Card
        userKeyData={keyState?.carbohydrateCount}
        unit="g"
        subtitle="Glucides"
        className="carbohydrate"
        logo={carbs}
      />
      <Card
        userKeyData={keyState?.lipidCount}
        unit="g"
        subtitle="Lipides"
        className="lipid"
        logo={fat}
      />
    </>
  )
}

export default KeyData
