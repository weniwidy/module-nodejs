const chalk = require('chalk');
const moment = require('moment');
const express = require('express')

// ini module chalk
console.log(chalk.red('magang bro'));

// ini module moment
console.log("Sekarang " + moment().format('D MMMM YYYY, h:mm:ss a'));

// ini module express
// buka di http://localhost:3000/
const app = express()
 app.get('/', function (req, res) {
  res.send('Halo dunia')
})
 app.listen(3000)
