function Calendar() {
  var days = [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai'
  ]
  const columns = 8
  const rows = 14
  const startOfDay = 7
  var canvas = document.getElementById('canvas');
  canvas.style.width = "100%"
  canvas.width = "800"
  canvas.height = "280"
  var cellWidth = +canvas.width / columns
  var cellHeight = +canvas.height / rows
  var xoffset = cellWidth
  var yoffset = cellHeight
  var ctx = canvas.getContext('2d');

  this.draw = function () {
    if (canvas.getContext) {
      this.drawHours()
      this.drawDays()
      this.drawLines()
    }
  }

  this.drawLines = function () {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, 280)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(800, 0)
    ctx.stroke()
    for (let i = 0; i < columns; i++) {
      let start = xoffset + cellWidth * i
      ctx.beginPath()
      ctx.moveTo(start, 0)
      ctx.lineTo(start, 800)
      ctx.stroke()
    }
    for (let i = 0; i < rows; i++) {
      let start = yoffset + cellHeight * i
      ctx.beginPath()
      ctx.moveTo(0, start)
      ctx.lineTo(800, start)
      ctx.stroke()
    }
  }

  this.drawHours = function () {
    let position = cellHeight
    ctx.font = '20px serif'
    ctx.textBaseline = 'middle'
    let hour = startOfDay
    for (let i = 0; i  < rows; i++) {
      let text = hour + ' - ' + (hour + 1)
      let measure = ctx.measureText(text)
      let xoffs = (xoffset - measure.width) / 2
      let yoffs = cellHeight / 2
      ctx.fillText(text, xoffs, position + yoffs)
      position += cellHeight
      hour++
    }

  }
  this.drawDays = function () {
    let position = xoffset
    ctx.font = '15px serif'
    ctx.textBaseline = 'middle'
    for (let day of days) {
      let text = ctx.measureText(day)
      let offs = (cellWidth - text.width) / 2
      ctx.fillText(day, position + offs, yoffset / 2)
      position += cellWidth
    }
  }

  this.drawFree = function (offsetHours, lenght) {
    // offsetHours from the start of thw week
    let x = xoffset + Math.floor(offsetHours / 24) * cellWidth
    let y = yoffset + ((offsetHours % 24) - startOfDay + 1) * cellHeight
    ctx.fillStyle = 'rgb(255, 165, 0)'
    ctx.fillRect(x, y, x + 100, y + length * 100)

  }

  this.drawReserved = function (offsetHours, length, subject) {
    // offsetHours from the start of thw week
    let x = xoffset + Math.floor(offsetHours / 24) * cellWidth
    let y = yoffset + ((offsetHours % 24) - startOfDay) * cellHeight
    ctx.fillStyle = 'rgba(255, 165, 0, 0.5)'
    ctx.fillRect(x, y, cellWidth, length * cellHeight)
    ctx.font = '20px serif'
    ctx.fillStyle = 'black'
    ctx.textBaseline = 'middle'
    let measure
    for (let size = 20; size; size--) {
      ctx.font = size +'px serif'
      measure = ctx.measureText(subject)
      if (measure.width < cellWidth) {
        break
      }
    }
    let offs = (cellWidth - measure.width) / 2
    ctx.fillText(subject, x + offs, y + (cellHeight / 2), cellWidth)    
  }
}

export {
  Calendar
}