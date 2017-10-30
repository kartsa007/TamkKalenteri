// include dependencies 
var proxy = require('express-http-proxy')
var express = require('express')
var app = express()
if (process.argv.length < 3) {
  console.log('ApiKey puuttuu, sorry')
  process.exit(-1)
}
let apiKey = process.argv[2]
var btoa = require('btoa')

function getProxy1() {
  let options = {
    filter: function (req, res) {
      return req.method == 'GET' || req.method == 'POST'
    },
    proxyReqPathResolver: function (req) {
      let url = 'https://opendata.tamk.fi'
      url += req.originalUrl
      if (req.method == 'GET') {
        url += '?apiKey=' + apiKey
      }
      return url
    },
    proxyReqOptDecorator: function (reqOpts, req) {

      if (req.method == 'POST') {
        reqOpts.headers['Authorization'] = 'Basic ' + btoa(apiKey)
      }
      return reqOpts
    },
    https: true
  }
  return proxy('https://opendata.tamk.fi', options)
}

app.use('/r1', getProxy1())
app.use(express.static('.'))
app.listen(3000)