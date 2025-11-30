import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Features = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Features sayfası artık Logistics sayfasının içinde
    navigate('/products/logistics#features', { replace: true })
  }, [navigate])

  return null
}

export default Features
