// Dotenv
require('dotenv').config()

const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const json = require('koa-json')

// Routes
const boxen = require('boxen')
const chalk = require('chalk')
const indexRoute = require('./routes')
const apiRoute = require('./routes/api')

// Utilities

// App
const app = new Koa()
app.use(json())
app.use(BodyParser())

app.use(indexRoute.routes())
  .use(indexRoute.allowedMethods())
  .use(apiRoute.routes())
  .use(apiRoute.allowedMethods())

app.listen(8080, () => console.log(boxen(`Listening on ${chalk.cyan.bold(`http://${process.env.APP_HOST}:${process.env.APP_PORT}`)}`, {padding: 1, margin: {top: 1, right: 0, bottom: 1, left: 0}})))
