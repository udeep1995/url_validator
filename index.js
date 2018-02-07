const express = require('express');
const bp = require('body-parser');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('./public'));
app.use(bp.urlencoded({
  extended: true
}))

app.use(bp.json());
app.listen(port, function(req, res) {
  console.log(`Server Started at ${port}`);
})



app.post('/url-validate', function(req, res) {
  const url = req.body.url;
  const options = {
    url: url
  }
  const futureVal = new Promise(function(resolve, reject) {
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    })
  });
  futureVal.then(function(resp) {
    if (resp) {
      res.send(true);
    }
  }).catch(function(err) {
    if (err) {
      res.send(false);
    }
  });
})

app.get('/', function(req, res) {
  res.send(index.html);
});
