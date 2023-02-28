const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  if (req.url === "/file") {
    fs.readFile("./big-file", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/file-stream") {
    const src = fs.createReadStream("./big-file");
    src.pipe(res);
  } else {
    res.end("not found");
  }
});

server.listen(3000);
