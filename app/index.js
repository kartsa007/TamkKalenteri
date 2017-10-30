'use strict'

import { queryBuildings }  from './buildings'
import { DatePicker } from './datePicker'

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

Date.prototype.toTAMKString = function() {
  return this.getFullYear() +
    '-' + pad(this.getMonth() + 1) +
    '-' + pad(this.getDate()) +
    'T' + pad(this.getHours()) +
    ':' + pad(this.getMinutes())
}

function init() {

  new DatePicker()
  queryBuildings()
}
window.addEventListener('load', init)  
