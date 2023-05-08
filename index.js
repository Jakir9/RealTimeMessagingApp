// Import necessary modules
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

// Set up the server
var port = 1010;
http.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(express.static(__dirname + "/public"));

// Set up socket.io
io.sockets.on("connection", function (socket) {
  socket.emit("message", { message: "welcome to the chat" });
  socket.on("send", function (data) {
    io.sockets.emit("message", data);
  });
});

// Set up views
app.set("views", __dirname + "/tpl");
app.set("view engine", "jade");
app.engine("jade", require("jade").__express);
app.get("/", function (req, res) {
  res.render("page");
});
