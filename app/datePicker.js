import $ from 'jquery'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'
import { Storage } from './storage'

function DatePicker() {

  var datePicker = document.getElementById('datepicker')

  function weekSelection(dateText, inst) {
    console.log(dateText)
    var date = $(datePicker).datepicker('getDate');
    let dayOffset = (date.getDay() + 6) % 7
    let offset = date.getTimezoneOffset()
    let ms = date.getTime()
    ms -= dayOffset * 1000 * 3600 *24
    Storage.startDate = new Date(ms)
    // Jump a week forward
    Storage.endDate = new Date(ms + 7 * 24 * 3600 * 1000)
  }

  $(function () {
    $(datePicker).datepicker({
      firstDay: 1,
      showOtherMonths: true,
      selectOtherMonths: true,
      onSelect: weekSelection
    })
  })
}

export {
  DatePicker
}