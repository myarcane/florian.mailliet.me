import React, { useState, useEffect, useRef } from "react"
import { HelmetMyCrags } from "../components/helmet-my-crags"
import "./mycrags.css"
import { CragParkingTable } from "../components/crag-parking-table"

const MyCragsPage = () => {
  const inputParkingNameRef = useRef(null)
  const inputParkingGeoRef = useRef(null)
  const inputCountryRef = useRef(null)
  const inputTextAreaRef = useRef(null)

  const [parkingsData, setParkingsData] = useState(null)

  const getMyCrags = async () => {
    try {
      const response = await fetch("/.netlify/functions/get-my-crags")
      const jsonData = await response.json()
      setParkingsData(jsonData)
    } catch (error) {
      throw new Error("Can not fetch my crags")
    }
  }

  const sendNewParkingData = async formData => {
    try {
      const response = await fetch("/.netlify/functions/post-new-crag", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        window.location.reload()
        return
      } else {
        throw new Error("Request failed.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = event => {
    event.preventDefault()

    const formData = {
      country: inputCountryRef.current.value,
      parking: inputParkingNameRef.current.value,
      geo: inputParkingGeoRef.current.value,
      crags: inputTextAreaRef.current.value,
    }

    sendNewParkingData(formData)
  }

  useEffect(() => {
    getMyCrags()
  }, [])

  return parkingsData ? (
    <>
      <HelmetMyCrags />
      <h4>My climbing crags ⛰️</h4>
      <form id="submit-new-parking" method="post" onSubmit={onSubmit}>
        <div className="row">
          <div className="four columns">
            <label htmlFor="country-name">Country *</label>
            <input
              ref={inputCountryRef}
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
              ref={inputParkingNameRef}
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
              ref={inputParkingGeoRef}
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
          ref={inputTextAreaRef}
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
            <th>Access the following crags</th>
          </tr>
          <CragParkingTable parkingsData={parkingsData} />
        </thead>
        <tbody />
      </table>
    </>
  ) : null
}

export default MyCragsPage
