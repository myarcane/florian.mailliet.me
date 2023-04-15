import React from "react"

const googleMapsEnpoint = "https://www.google.com/maps/search/?api=1"

export const CragParkingTable = ({ parkingsData }) => {
  const addParkingTable = (parkingName, { lat, lng }, cragsList = null) => {
    const googleMapsLink = `${googleMapsEnpoint}&query=${lat},${lng}`
    console.log({ googleMapsLink })
    return (
      <tr>
        <td>{parkingName}</td>
        <td>
          <a target="_blank" href={googleMapsLink}>
            {lat},{lng}
          </a>
        </td>
        <td>{cragsList ? cragsList : ""}</td>
      </tr>
    )
  }

  const cragParkings = parkingsData.reduce((acc, { parking, geo, crags }) => {
    return [...acc, addParkingTable(parking, geo, crags)]
  }, [])

  return <>{cragParkings}</>
}
