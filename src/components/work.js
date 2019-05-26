import React, { Component } from "react"
import Caption from "./caption"
import "./work.css"
import jobs from "../data/jobs.json"
import JobDetail from "./job-detail"
import JobItem from "./job-item"

class Work extends Component {
  constructor(props) {
    super(props)

    this.onClickItem = this.onClickItem.bind(this)
    this.onIntersecting = this.onIntersecting.bind(this)

    this.state = {
      currentJobId: 0,
      isDetailVisible: false,
      showItem: false,
    }
  }

  onClickItem(id) {
    this.setState({
      isDetailVisible: false,
    })

    setTimeout(() => {
      this.setState({ isDetailVisible: true, currentJobId: id })
    }, 500)
  }

  onIntersecting() {
    setTimeout(() => {
      this.setState({ isDetailVisible: true })
    }, 1200)
  }

  render() {
    const { id: sectionId } = this.props
    const { currentJobId, isDetailVisible } = this.state

    const jobItems = []
    let jobDetail = null
    let transitionDelay = 800

    jobs.map((job, id) => {
      if (currentJobId === id) {
        const tasks = []
        job.tasks.map((task, taskId) => {
          tasks.push(
            <li key={taskId.toString()} className="task">
              {task}
            </li>
          )
        })

        jobDetail = (
          <JobDetail
            id={id}
            position={job.position}
            visible={isDetailVisible}
            title={job.title}
            tasks={tasks}
            company={job.company}
            link={job.link}
          />
        )
      }
      jobItems.push(
        <JobItem
          years={job.years}
          key={id}
          id={id}
          onClickItem={this.onClickItem}
          transitionDelay={transitionDelay}
          isOn={currentJobId === id}
        />
      )
      transitionDelay += 100
    })

    return (
      <section id={sectionId} className="aligner">
        <div className="aligner__item">
          <Caption onIntersecting={this.onIntersecting}>
            <h1
              style={{
                transitionDelay: "400ms",
              }}
            >
              Where I've Worked.
            </h1>
            <ul className="job-items">{jobItems}</ul>
            <p />
            {jobDetail}
          </Caption>
        </div>
      </section>
    )
  }
}

export default Work
