const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 3000
const app = express();

app.listen(PORT,()=>console.log(`running on port ${PORT}`))