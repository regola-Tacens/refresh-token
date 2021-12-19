const mongoose = require("mongoose");
// const Token = require("./token.model");
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

//define schema
const tokenSchema = new mongoose.Schema({
  token: { type: String},
});

module.exports = mongoose.model("Token", tokenSchema);