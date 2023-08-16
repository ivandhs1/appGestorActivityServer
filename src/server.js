const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.set('port',3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use("/api/activitys",require('./routes/activitys.routes'))
app.use("/api/users",require('./routes/users.routes'))

module.exports = app;