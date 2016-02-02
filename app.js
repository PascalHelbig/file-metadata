var express = require('express');
var multer = require('multer')();
app = express();

app.use(express.static('public'));

app.post('/api/fileanalyse', multer.single('0'), function (req, res) {
  if (req.file) {
    res.json({fileSize: req.file.size});
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(8080, function () {
  console.log('Server running on 8080');
});
