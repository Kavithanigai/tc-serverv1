//Main starting point of app
const express = require('express');
const http = require('http');
const bodyParser =  require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
// Load routes
// const { UserPlan } = require('./models/userPlan');
// const userplans = require('./userplanRouter');

const db = require('./config/database');
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
//DB setup
// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect(db.mongoURI, {

})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));
router(app);
// Use routes
// app.use('/userplan', userplans);
//
//
// app.use('*', function (req, res) {
//   res.status(404).json({ message: 'Not Found' });
// });

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on port: ",port);
