import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Resources = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Resources sayfası artık Logistics sayfasının içinde
    navigate('/products/logistics#resources', { replace: true })
  }, [navigate])

  return null
}

export default Resources
