'use strict'

import { queryBuildings }  from './buildings'
import { DatePicker } from './datePicker'

//import $  from 'jquery'
//import 'webpack-jquery-ui'
//import 'webpack-jquery-ui/css'

function init() {

  new DatePicker()
  queryBuildings()
}
window.addEventListener('load', init)  
