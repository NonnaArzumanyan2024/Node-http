import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  let filePath = '';

  switch (req.url) {
    case '/':
      filePath = path.join(__dirname, 'pages', 'home.html');
      break;
    case '/contacts':
      filePath = path.join(__dirname, 'pages', 'contacts.html');
      break;
    case '/help':
      filePath = path.join(__dirname, 'pages', 'help.html');
      break;
    default:
      filePath = path.join(__dirname, 'pages', 'notfound.html');
      break;
  }


  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});


server.listen(4002, () => {
  console.log('Server work http://localhost:4002');
});
