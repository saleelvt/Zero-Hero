const http = require("http");
const url = require("url");
const express = require("express");
const app = express();
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const num1 = parsedUrl.pathname.substring(1);

    console.log("my name:", num1);
    const loggerMiddleware = (req, res, next) => {
      console.log(`Request received at ${new Date()}`);
      next(); // Pass control to the next middleware function
    };
    // Use the middleware function in the application
    app.use(loggerMiddleware);
    app.get("/", (req, res) => {
      res.send("saleel is a good boy ");
    });

    // res.end('saleel');
  })
  .listen(3033);
