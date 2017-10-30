'use strict'
import { Storage } from './storage'

function roomSelection(resources) {
  let select = document.createElement('select')
  select.id = 'roomselection'
  for (let resource of resources) {
    let option = document.createElement('option')
    option.value = resource.id
    option.textContent = resource.name + ' ' + resource.code
    select.appendChild(option)
  }
  let room = document.querySelector('#room')
  room.replaceChild(select, document.getElementById('roomselection'))
//  document.querySelector('#room').appendChild(select)
  select.addEventListener('input', (e) => {
    Storage.roomId = e.target.value
    e.preventDefault()
  })
}

function responseJsonData(data) {
  console.log(data)
  Storage.rooms = data.resources
  for (let resource of data.resources) {
    console.log(resource.name)
  }
  roomSelection(data.resources)
}

function responseOk(response) {
  console.log(response)
  return response.json()
}

function queryRooms(id) {
//  let username = 'username'
//  let id = Storage.buildingId
//  let url = 'https://opendata.tamk.fi/r1/reservation/building/' +id
//  url += '?apiKey=' + username
  let url = '/r1/reservation/building/' + id
  fetch(url).then(responseOk).then(responseJsonData)
}

export {
  queryRooms
}