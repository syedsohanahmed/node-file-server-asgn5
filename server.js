var fs = require("fs");
var http = require("http");
var port = 3000;

// Serve the file
var server = http.createServer((req, res) => {
  if (req.url === "/") {
    const data = fs.readFileSync("public/index.html", "utf8");
    res.end(data);
  }else if (req.url === "/about") { 
    const data = fs.readFileSync("public/about.html", "utf8");
      res.end(data);
      
  }else if (req.url === "/contact") { 
    const data = fs.readFileSync("public/contact.html", "utf8");
      res.end(data);
      
  }else {
    const data = fs.readFileSync("public/404.html", "utf8");
    res.end(data);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
