"use client"

import { useState, useEffect } from 'react'

interface UseTypingEffectProps {
  text: string
  typingSpeed?: number
  delayBeforeStart?: number
}

export function useTypingEffect({
  text,
  typingSpeed = 150,
  delayBeforeStart = 200,
}: UseTypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (currentIndex === 0) {
      const startDelay = setTimeout(() => {
        setCurrentIndex(1)
      }, delayBeforeStart)

      return () => clearTimeout(startDelay)
    }

    if (currentIndex > text.length) {
      setIsTypingComplete(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex))
      setCurrentIndex((prev) => prev + 1)
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, typingSpeed, delayBeforeStart])

  return {
    displayedText,
    isTypingComplete,
  }
}