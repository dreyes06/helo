require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env
      app = express()

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }
    })
)

massive({
    connectionString: DB_STRING,
    ssl: { rejectUnauthorized: false }
}).then( db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.listen(SERVER_PORT, console.log(`Server runnin on ${SERVER_PORT}, roger roger!`))