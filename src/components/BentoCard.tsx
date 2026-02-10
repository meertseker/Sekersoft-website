import { motion } from 'framer-motion'
import { useState, useRef, MouseEvent } from 'react'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  size?: 'small' | 'medium' | 'large' | 'hero'
  enableHighlight?: boolean
}

export const BentoCard = ({ 
  children, 
  className = '', 
  delay = 0,
  size = 'medium',
  enableHighlight = true
}: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableHighlight) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const sizeClasses = {
    small: 'bento-small',
    medium: 'bento-medium',
    large: 'bento-large',
    hero: 'bento-hero'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Apple's cubic-bezier easing
      }}
      className={`${sizeClasses[size]} bento-card glass-liquid glass-reflective relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor-following gradient highlight */}
      {enableHighlight && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(10, 132, 255, 0.15), transparent 40%)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
