import React from "react"
import { HelmetMyCrags } from "../components/helmet-my-crags"
import "./mycrags.css"

const MyCragsPage = () => {
  return (
    <>
      <HelmetMyCrags />
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
              placeholder="e.g: Peillon - déchetterie"
              id="parking-name"
            />
          </div>
          <div class="four columns">
            <label htmlFor="parking-geo">Coordinates (UTM, decimal...) *</label>
            <input
              className="u-full-width"
              type="text"
              required
              placeholder="e.g: 32T 371089 4848971"
              id="parking-geo"
            />
          </div>
        </div>
        <label htmlFor="crags-list">Easy access to the following crags</label>
        <textarea
          className="u-full-width"
          placeholder="e.g: Baus Roux, Gros Bernard"
          id="crags-list"
        />
        <input
          className="button-primary"
          type="submit"
          value="Submit new parking"
        />
      </form>
      <table id="parkings-list" class="u-full-width">
        <thead>
          <tr>
            <th>Country</th>
            <th>Site's name - parking's name</th>
            <th>Coordinates</th>
            <th>Access crags</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </>
  )
}

export default MyCragsPage
