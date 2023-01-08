let express = require('express');
let app = express();
app.use(express.static(__dirname + '/')); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/');
});
app.listen(8080, 'localhost');
console.log("Weather Server is Listening on port 8080");