const dotenv = require('dotenv-extended')

const database = {
  "host": proccess.env.PORT,
  "port": process.env.conn,
  "username": process.env.USER,
  "passwrod": process.env.PASS,
  "dialect":process.env.dialect
}

