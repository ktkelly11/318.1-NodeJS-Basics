// Part 5: Open Exploration
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(
    `<h1 style="color: purple, text-alignment: center">Welcome to Katie's Page!</h1>`
  );

  switch (req.url) {
    case "/plants":
      response.write("Look at all of these cool plants");
      break;
    case "/places":
      response.write("Look at all thses cool places!");
      break;
    case "/pics":
      response.write("Look at all of these cool pics~");
      break;
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
