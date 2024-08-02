const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require('xss-clean') 
const reateLimit = require('express-rate-limit')

const app = express();


const rateLimiter = reateLimit.rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
 message: 'Too many requests from this IP. please try again'
});

app.use(xssClean())
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test",rateLimiter, (req, res) => {
  res.status(200).send({
    message: "api testing is working",
  });
});
//client error handling
app.use((req, res, next) => {
  
 
  next(createError(404, "rout not found"));
});
//server error handler => all the errors
app.use((err, req, res, next) => {
 
   return res.status(err.status || 500).json({
    success:false,
    message:err.message
   })
});

module.exports = app
