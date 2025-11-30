import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Demo = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Demo sayfası artık Logistics sayfasının içinde
    navigate('/products/logistics#demo', { replace: true })
  }, [navigate])

  return null
}

export default Demo
