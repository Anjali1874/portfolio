import { useEffect, useState } from 'react'

function Penguin({ isVisible, onAnimationComplete }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onAnimationComplete()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onAnimationComplete])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <div 
        className="animate-penguin-land text-9xl"
        style={{
          animation: 'penguinLand 2s ease-in forwards'
        }}
      >
        🐧
      </div>
    </div>
  )
}

export default Penguin
