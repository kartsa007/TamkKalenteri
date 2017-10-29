'use strict'

import {
  Calendar
} from './calendar'

import {
  Storage
} from './storage'

function handleReservations(reservations) {
  let calendar = new Calendar()
  calendar.draw()
  for (let reservation of reservations) {
    //  let weekStart = new Date(Storage.)
    let startDate = new Date(reservation.startDate)
    let endDate = new Date(reservation.endDate)
    let startOffMs = startDate.getTime() - Storage.startDate.getTime()
    let startOffH = startOffMs / (3600 * 1000)
    let resLenMs = endDate.getTime() -
      startDate.getTime()
    let resLenH = resLenMs / (3600 * 1000)
    let day = (startDate.getDay() + 6) % 7
    calendar.drawReserved(startOffH, resLenH, reservation.subject)
  }
}

function responseJsonData(data) {
  console.log(data)
  for (let resource of data.reservations) {
    console.log(resource)
  }
  handleReservations(data.reservations)
}

function responseOk(response) {
  console.log(response)
  return response.json()
}

function queryRoomReservations(startDate, endDate, roomCode) {
  // let username = 'apiKey'

  let headers = new Headers()
  //  headers.append('Authorization', 'Basic ' + btoa(username))
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', '*/*')
  console.log(headers)
  // Display the key/value pairs
  for (var pair of headers.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  //let url = 'https://opendata.tamk.fi/r1/reservation/search'
  let url = '/r1/reservation/search'
  let init = {
    method: 'post',
    headers: headers,
    body: JSON.stringify({
      "startDate": startDate.toISOString().slice(0, 16),
      "endDate": endDate.toISOString().slice(0, 16),
      "room": [roomCode]
    })
  }
  fetch(url, init)
    .then(responseOk).then(responseJsonData)
}

export {
  queryRoomReservations
}