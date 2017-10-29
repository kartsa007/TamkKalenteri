'use strict'
import { queryRoomReservations } from './reservations'
function roomId2Code() {
  if (Storage.rooms && Storage.roomId) {
    for (let room of Storage.rooms) {
      if (room.id == Storage.roomId) {
        return room.code
      }
    }
  }
  return undefined
}

let Storage = {
  set roomId(id) {
    if (id != this._roomId) {
      this._roomId = id
      if (this._roomId && this._startDate && this._endDate) {
        queryRoomReservations(this._startDate, this.endDate,
          roomId2Code(this._roomId))
      }
    }
  },
  get roomId() {
    return this._roomId
  },
  set startDate(date) {
    if (date != this._startDate) {
      this._startDate = date
    }
  },
  get startDate() {
    return this._startDate
  },

  set endDate(date) {
    if (date != this._endDate) {
      this._endDate = date
      if (this._roomId && this._startDate && this._endDate) {
        queryRoomReservations(this._startDate, this._endDate,
          roomId2Code(this._roomId))
      }
    }
  },
  get endDate() {
    return this._endDate
  }
}

export { Storage }
