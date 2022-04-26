require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const routes = require('./controllers/flowerStore.js')


//Middleware
app.use(morgan('tiny')); // dev logging for routes
app.use(express.static('public')); // serve files from public statically 
app.use(express.urlencoded({ extended: true})); // parses url encoded bodies
app.use(methodOverride('_method'));
app.use('/', routes)

mongoose.connect (process.env.DATABASE_URL || "mongodb+srv://SEI:cataleya@cluster0.vplql.mongodb.net/products?retryWrites=true&w=majority") 
mongoose.connection
  .on("connected", () => { console.log("Connected to mongoose!") })
  .on("close", () => { console.log("mongoose disconnected") })
  .on("error", (error) => { console.log(error) });











// Listen 
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))
