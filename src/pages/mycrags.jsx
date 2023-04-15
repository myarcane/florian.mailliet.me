import React, { useState, useEffect } from "react"
import { HelmetMyCrags } from "../components/helmet-my-crags"
import "./mycrags.css"
import { CragParkingTable } from "../components/crag-parking-table"

const MyCragsPage = () => {
  const [parkingsData, setParkingsData] = useState(null)

  const getMyCrags = async () => {
    try {
      const response = await fetch("/.netlify/functions/get-my-crags")
      const jsonData = await response.json()
      setParkingsData(jsonData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMyCrags()
  }, [])

  return parkingsData ? (
    <>
      <HelmetMyCrags />
      <h4>My climbing crags ⛰️</h4>
      <form id="submit-new-parking" method="post">
        <div className="row">
          <div className="four columns">
            <label htmlFor="country-name">Country *</label>
            <input
              className="u-full-width"
              type="text"
              required
              placeholder="e.g: France"
              id="country-name"
            />
          </div>
          <div className="four columns">
            <label htmlFor="parking-name">Site's name - parking's name *</label>
            <input
              className="u-full-width"
              type="text"
              required
              placeholder="e.g: Céüse - Parking 1"
              id="parking-name"
            />
          </div>
          <div className="four columns">
            <label htmlFor="parking-geo">Coordinates (UTM, decimal...) *</label>
            <input
              className="u-full-width"
              type="text"
              required
              placeholder="e.g: 44.4991,5.9366"
              id="parking-geo"
            />
          </div>
        </div>
        <label htmlFor="crags-list">Easy access to the following crags</label>
        <textarea
          className="u-full-width"
          placeholder="e.g: Berlin, Biographie"
          id="crags-list"
        />
        <input
          className="button-primary"
          type="submit"
          value="Submit new parking"
        />
      </form>
      <table id="parkings-list" className="u-full-width">
        <thead>
          <tr>
            <th>Site's name - parking's name</th>
            <th>Coordinates</th>
            <th>Access crags</th>
          </tr>
          <CragParkingTable parkingsData={parkingsData} />
        </thead>
        <tbody />
      </table>
    </>
  ) : null
}

export default MyCragsPage
