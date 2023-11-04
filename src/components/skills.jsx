import React from "react"
import learningSkills from "../data/learning-skills.json"
import masteringSkills from "../data/mastering-skills.json"

export const Skills = ({ incrementDelay }) => {
  return (
    <>
      <h2
        style={{
          transitionDelay: "900ms",
        }}
      >
        Here are a few technologies I've been{" "}
        <span className="technologies">working</span> with
      </h2>
      <p />
      <div>
        <ul className="skills--grid">
          {masteringSkills.map((skill, id) => {
            return (
              <>
                <li
                  key={`skill-${id.toString()}`}
                  className="skill"
                  style={{
                    transitionDelay: `${id * incrementDelay + 1000}ms`,
                  }}
                >
                  {skill}
                </li>
              </>
            )
          })}
        </ul>
      </div>
      <p />
      <p />
      <p
        style={{
          transitionDelay: "2500ms",
        }}
      >
        learning topics 👨‍💻
      </p>
      <div>
        <ul className="skills--grid">
          {" "}
          {learningSkills.map((skill, id) => {
            return (
              <>
                <li
                  key={`skill-${id.toString()}`}
                  className="skill learning"
                  style={{
                    transitionDelay: `${(masteringSkills.length + id) *
                      incrementDelay +
                      1300}ms`,
                  }}
                >
                  {skill}
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}
