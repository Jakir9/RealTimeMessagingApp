var express = require("express"); //import expressJS
var app = express(); //create express object
var port = 1010; //port number

app.get("/", function (req, res) {
  //get request
  res.send("Hello World");
});

app.listen(port, function () {
  //listen to port
  console.log(`Server running at port: http://127.0.0.1:${port}`);
}); //end of listen
