const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Auth = new Schema({
  userId: {
    type: String
  },
  authToken: {
    type: String
  },
  tokenSecret: {
    type: String
  },
  tokenGenerationTime: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('AuthModel', Auth)