"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if the link is an internal anchor link
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for the fixed header
          behavior: "smooth",
        })

        // Update URL without reloading the page
        window.history.pushState(null, "", href)
      }
    }

    // Add event listener to the document
    document.addEventListener("click", handleAnchorClick)

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}

