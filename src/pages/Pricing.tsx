import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Pricing sayfası artık Logistics sayfasının içinde
    navigate('/products/logistics#pricing', { replace: true })
  }, [navigate])

  return null
}

export default Pricing
