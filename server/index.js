const express = require('express'),
      {SERVER_PORT} = process.env
      app = express()

app.use(express.json())

app.listen(SERVER_PORT, console.log(`Server runnin on ${SERVER_PORT}, roger roger!`))