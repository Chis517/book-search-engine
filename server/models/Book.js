const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const gameSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  website: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = gameSchema;