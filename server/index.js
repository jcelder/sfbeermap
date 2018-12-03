const express = require('express');
const https = require('https');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 80;
const httpsPort = process.env.httpsPort || 8081;

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
}, app)
  .listen(httpsPort, () => {
    console.log(`Server listening on port ${httpsPort}`);
  });
