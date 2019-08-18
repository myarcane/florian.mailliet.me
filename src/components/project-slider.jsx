import React, { Component } from "react"
import "./slider.css"
import projectsUrls from "../data/projects"

class ProjectSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      projectUrls: projectsUrls,
    }

    this.fetchDataFromProjects = this.fetchDataFromProjects.bind(this)
  }

  fetchDataFromProjects(index, projectUrls) {
    console.log("##projectUrls", projectUrls)
    fetch(projectUrls[index])
      .then(r => r.text())
      .then(data => {
        data = data.replace(/\n|\r/g, "")
        const cover = data.match(new RegExp("cover:_ ([^ ]+) _", "i"))
        const stack = data.match(new RegExp("stack:_ ([^ ]+) _", "i"))

        const project = {}

        if (cover && cover.length >= 2 && stack && stack.length >= 2) {
          project.cover = cover[1]
          project.stack = stack[1]

          console.log(project)
          const projects = [...this.state.projects, project]

          this.setState({
            projects,
          })
        }
        if (index < projectUrls.length - 1) {
          index += 1
          this.fetchDataFromProjects(index, projectUrls)
        }
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.fetchDataFromProjects(0, this.state.projectUrls)
  }

  onClick() {}

  render() {
    const { projects } = this.state
    const imgItems = []

    console.log("##proj", projects)

    projects.forEach(project => {
      imgItems.push(
        <div className="slider__wrapper">
          <img src={project.cover} />
          <div className="darken" />
        </div>
      )
    })
    return <div className="slider">{imgItems}</div>
  }
}

export default ProjectSlider
