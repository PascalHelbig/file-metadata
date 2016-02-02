var express = require('express');
app = express();

app.use(express.static('public'));

app.post('/api/fileanalyse', function(req, res) {
  res.json({fileSize: 1337});
});

app.listen(8080, function () {
  console.log('Server running on 8080');
});
