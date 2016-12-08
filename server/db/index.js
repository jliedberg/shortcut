import mongoose from 'mongoose'
import configDB from './config'

export default function connect() {
  mongoose.connect(configDB.url)

// When successfully connected
  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + configDB.url)
  })

// If the connection throws an error
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
  })

// When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected')
  })

// If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  });
}
