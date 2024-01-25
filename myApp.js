let express = require('express');
let app = express();
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next()
  });
console.log('Hello World');
//app.get('/', function(req, res) {
//    res.send('Hello Express');
//  });
  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  app.use('/public', express.static(__dirname + '/public'));
  app.use(bodyPaser.urlencoded({ extended: false }));
  app.get('/json', function(req, res) {
  res.json({
    "message": 'Hello json'
  });
}); 
// CODE BELOW THIS LINE IS FROM REPLIT
//const mySecret = process.env['MESSAGE_STYLE'];
//app.get("/json", (req, res) => { 
//    let message = "Hello json"; 
//    (process.env.MESSAGE_STYLE == "uppercase") ?
//     message=message.toUpperCase() : message=message;
//      res.json({"message": message}); });
app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );
  app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word })
  })
  app.get("/name", (req, res) => {
    res.json({ name: req.query.first + " " + req.query.last })
  })
  app.post("/name", (req, res) => {
    res.json({ name: req.body.first + " " + req.body.last })
  })




































 module.exports = app;
