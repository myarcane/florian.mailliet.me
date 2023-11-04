import React from "react"
import linkedinRecommendations from "../data/linkedin-recommendations.json"

export const Recommendations = () => {
  return (
    <>
      <h2
        style={{
          transitionDelay: "3200ms",
        }}
      >
        What is it like <span>working</span> with me?
      </h2>
      {linkedinRecommendations.map(({ name, link, content, title }) => {
        return (
          <>
            <p
              style={{
                transitionDelay: "3200ms",
              }}
            >
              {content}
            </p>
            <p style={{ textAlign: "right", transitionDelay: "3200ms" }}>
              <a href={link}>{name}</a>, {title}
            </p>
            <p />
            <p />
          </>
        )
      })}
    </>
  )
}
