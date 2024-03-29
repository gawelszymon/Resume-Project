//BACKEND

const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
const {response} = require("express");

const app = express();
const server = http.createServer(app);
let port = 3006;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "../about.html")));

//routing
app.get("/", function (req, res){
  res.sendFile(path.join(__dirname, "../about.html"))
})

app.post("/send_email", function (req, res) {
  let from = req.body.from;
  let to = req.body.to;
  let subject = req.body.subject;
  let message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'szymongaw853@gmail.com',
      pass: 'sbid rdrl ugia eeti'
    }
  });

  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: message
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if(error) {
      console.log(error)
    } else {
      console.log("Email send: " + info.res)
    }
    res.redirect("/")
  })

})

//initialize Web Server
server.listen(port, function() {
  console.log("Initializing server on port: " + port)
})
