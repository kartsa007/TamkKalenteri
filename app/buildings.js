'use strict'
import { Storage } from './storage'
import { queryRooms } from './rooms'

function buildingSelection(resources) {
  let select = document.createElement('select')
  for (let resource of resources) {
    let option = document.createElement('option')
    option.value = resource.id
    option.textContent = resource.name
    select.appendChild(option)
    // storage.buildingId = option.value
  }
  document.querySelector('#building').appendChild(select)
  select.addEventListener('input', (e) => {
    Storage.buildingId = e.target.value
    e.preventDefault()
  })
}

function responseJsonData(data) {
  console.log(data)
  Storage.buildings = data.resources
  for (let resource of data.resources) {
    console.log(resource.name)
  }
  buildingSelection(data.resources)
}

function responseOk(response) {
  console.log(response)
  return response.json()
}

function queryBuildings() {
//  let username = 'testname'
//  let url = 'https://opendata.tamk.fi/r1/reservation/building?apiKey='
//  url += username
  let  url = '/r1/reservation/building'
  fetch(url).then(responseOk).then(responseJsonData)
}

export {
  queryBuildings
}