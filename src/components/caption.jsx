import React, { useEffect, useRef, useState } from "react"
import "./caption.css"

export const Caption = ({ children }) => {
  const captionNode = useRef(null)
  const captionItems = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const getItemsHeight = () => {
    const node = captionItems.current
    return node.getBoundingClientRect().height
  }
  useEffect(() => {
    const onChange = (changes, observer) => {
      changes.forEach(change => {
        if (change.intersectionRatio >= 0.2) {
          setIsIntersecting(true)
        }
      })
    }

    const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.2, // visible amount of item shown in relation to root
    }

    if ("IntersectionObserver" in window) {
      const node = captionNode.current

      const observer = new IntersectionObserver(onChange, options)
      observer.observe(node)
    } else {
      setIsIntersecting(true)
    }
  }, [])

  return (
    <div
      ref={captionNode}
      className={`caption ${isIntersecting ? "fadein" : ""}`}
    >
      <div ref={captionItems} className="caption__item">
        {children}
      </div>
    </div>
  )
}
