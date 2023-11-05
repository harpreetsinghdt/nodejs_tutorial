// Require MongoDB language driver

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './../../.env' });
const uri = process.env.DOTENV_MONGODB_URI;
// const uri = require('./../mongodb_atlas_uri');
// console.log(uri);
// const safeURI = `${uri.slice(0, 14)}****${uri.slice(30, 31)}****${uri.slice(
// 	47
// )}`;

module.exports = client = new MongoClient(uri);
