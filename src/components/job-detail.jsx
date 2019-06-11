import React from "react"

const JobDetail = ({ tasks, position, title, visible, company, link, id }) => {
  company = company.toLowerCase()
  return (
    <div
      key={id.toString()}
      className={`job-detail ${visible ? "fadein" : ""}`}
    >
      <h2>
        {position}
        <a href={link} target="_blank">{` @${company}`}</a>
      </h2>
      <h4>{title}</h4>
      <ul className="tasks">{tasks}</ul>
    </div>
  )
}

export default JobDetail
