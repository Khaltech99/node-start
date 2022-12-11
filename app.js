const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is our homepage");
  } else if (req.url === "/about") {
    res.end("this is our about page");
  } else {
    res.end(`<h1>the page ${req.url} cannot be found</h1>  
    <a href="/about"> back to about  </a>
    `);
  }
});

server.listen(5000);
