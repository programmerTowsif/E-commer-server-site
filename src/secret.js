require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 5000; 

module.exports = { serverPort };