require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 5000; 
const mongoodb = process.env.MONGOODB_URL;
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/products/image1.png'
module.exports = { serverPort, mongoodb, defaultImagePath };