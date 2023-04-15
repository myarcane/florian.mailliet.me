import React from "react"

const googleMapsEnpoint = "https://www.google.com/maps/search/?api=1"

export const CragParkingTable = ({ parkingsData }) => {
  const addParkingTable = (parkingName, { lat, lng }, index, cragsList = null) => {
    const googleMapsLink = `${googleMapsEnpoint}&query=${lat},${lng}`
    return (
      <tr key={index}>
        <td>{parkingName}</td>
        <td>
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer nofollow">
            {lat},{lng}
          </a>
        </td>
        <td>{cragsList ? cragsList : ""}</td>
      </tr>
    )
  }

  const cragParkings = parkingsData.reduce((acc, { parking, geo, crags }, index) => {
    return [...acc, addParkingTable(parking, geo, index, crags)]
  }, [])

  return <>{cragParkings}</>
}
