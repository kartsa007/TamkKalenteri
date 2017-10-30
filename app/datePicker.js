import $ from 'jquery'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'
import { Storage } from './storage'

function DatePicker() {

  var datePicker = document.getElementById('datepicker')

  function weekSelection(dateText, inst) {
    console.log(dateText)
    let date = $(datePicker).datepicker('getDate')
    let offset = date.getTimezoneOffset() * 60 * 1000
    Storage.date = new Date(date.getTime() - offset)
    let dayOffset = (Storage.date.getDay() + 6) % 7
    let ms = Storage.date.getTime()
    ms -= dayOffset * 1000 * 3600 *24
    Storage.startDate = new Date(ms)
    // Jump a week forward
    Storage.endDate = new Date(ms + 7 * 24 * 3600 * 1000)
    weekNumber()
  }

  $(function () {
    $(datePicker).datepicker({
      firstDay: 1,
      showOtherMonths: true,
      selectOtherMonths: true,
      onSelect: weekSelection
    })
  })

  function prevWeek(e) {
    let weekMs = 7 * 24 * 3600 * 1000
    Storage.startDate = new Date(Storage.startDate.getTime() - weekMs)
    Storage.endDate = new Date(Storage.endDate.getTime() - weekMs)
    Storage.date = new Date(Storage.date.getTime() - weekMs)
    $(datepicker).datepicker('setDate', Storage.date)
    weekNumber()
  }

  function nextWeek(e) {
    let weekMs = 7 * 24 * 3600 * 1000
    Storage.startDate = new Date(Storage.startDate.getTime() + weekMs)
    Storage.endDate = new Date(Storage.endDate.getTime() + weekMs)
    Storage.date = new Date(Storage.date.getTime() + weekMs)
    $(datepicker).datepicker('setDate', Storage.date)
    weekNumber()
  }

  function weekNumber() {
    let weekNumberElement = document.getElementById('weekNumber')
    let week = $.datepicker.iso8601Week(Storage.date)
    weekNumberElement.textContent = 'Viikko ' + week
  }

  let prev = document.getElementById('prev')
  prev.addEventListener('click', prevWeek, false)
  let next = document.getElementById('next')
  next.addEventListener('click', nextWeek, false)
}

export {
  DatePicker
}