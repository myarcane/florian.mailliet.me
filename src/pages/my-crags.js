import React from "react"
import { Helmet } from "react-helmet"
import "./my-crags.css"

const MyCragsPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Parking escalade 06</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
        />
      </Helmet>
      <h4>Parkings des falaises du 06 et du 83</h4>
      <form id="submit-new-parking" method="post">
        <div class="row">
          <div class="six columns">
            <label for="parking-name">Nom du site - nom du parking *</label>
            <input
              class="u-full-width"
              type="text"
              required
              placeholder="ex: Peillon - déchetterie"
              id="parking-name"
            />
          </div>
          <div class="six columns">
            <label for="parking-geo">Coordonnées (UTM, decimal...) *</label>
            <input
              class="u-full-width"
              type="text"
              required
              placeholder="ex: 32T 371089 4848971"
              id="parking-geo"
            />
          </div>
        </div>
        <label for="crags-list">Donne accés au(x) secteur(s)</label>
        <textarea
          class="u-full-width"
          placeholder="ex: Baus Roux, Gros Bernard, Chez Pierrot, Derrière le bloc, Monte Grosso, Chez Réb"
          id="crags-list"
        />
        <input
          class="button-primary"
          type="submit"
          value="Soumettre un nouveau parking"
        />
      </form>
      <table id="parkings-list" class="u-full-width">
        <thead>
          <tr>
            <th>Nom du site - nom du parking</th>
            <th>Coordonnées</th>
            <th>Accés aux secteurs</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </>
  )
}

export default MyCragsPage
