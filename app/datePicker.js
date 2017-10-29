import $ from 'jquery'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'
import { Storage } from './storage'

function DatePicker() {

  var datePicker = document.getElementById('datepicker')

  function weekSelection(dateText, inst) {
    console.log(dateText)
    var date = $(datePicker).datepicker('getDate');
    let day = date.getDay()
    let offset = date.getTimezoneOffset()
    Storage.startDate = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate() - date.getDay() + 1);
    Storage.endDate = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate() - date.getDay() + 8);
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