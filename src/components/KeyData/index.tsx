import { useState } from 'react'
import { useParams } from 'react-router-dom'

const KeyData: React.FC = () => {
  const [keyState, setKeyState] = useState()
  const { id } = useParams()

  return <></>
}

export default KeyData
