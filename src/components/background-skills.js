import React, { Component } from "react"
import {
  scaleOrdinal,
  schemeSet3,
  scaleLinear,
  max,
  pack,
  select,
  hierarchy,
} from "d3"
import "./background-skills.css"
import skills from "../data/skills.json"

class BackgroundSkills extends Component {
  constructor(props) {
    super(props)

    this.screenNode = React.createRef()

    this.state = {
      isIntersecting: false,
    }
  }

  initChart() {
    const diameter = 600
    const color = scaleOrdinal(schemeSet3)

    const colorScale = scaleLinear()
      .domain([
        0,
        max(skills, function(d) {
          return d.value
        }),
      ])
      .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"])

    const bubble = pack()
      .size([diameter, diameter])
      .padding(5)

    const margin = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }

    const svg = select("#chart")
      .append("svg")
      .attr("viewBox", "0 0 " + (diameter + margin.right) + " " + diameter)
      .attr("width", diameter + margin.right)
      .attr("height", diameter)
      .attr("class", "chart-svg")

    const root = hierarchy({ children: skills })
      .sum(function(d) {
        return d.value
      })
      .sort(function(a, b) {
        return b.value - a.value
      })

    bubble(root)

    const node = svg
      .selectAll(".node")
      .data(root.children)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + d.x + " " + d.y + ")"
      })
      .append("g")
      .attr("class", "graph")

    node
      .append("circle")
      .attr("r", function(d) {
        return d.r
      })
      .style("fill", function(d) {
        return color(d.data.name)
      })

    node
      .append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.name
      })
      .style("fill", "#ffffff")
  }

  componentDidMount() {
    this.initChart()
  }
  render() {
    return (
      <div className="background-skills">
        <div id="chart" className="chart" />
      </div>
    )
  }
}

export default BackgroundSkills
