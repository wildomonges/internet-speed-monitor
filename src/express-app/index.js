const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.use(cors());
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/reports', require('./routes/report.routes'));

// Static files
const STATIC_FILE_PATH = path.join(__dirname, '..', 'react-app' ,'public')
console.log(STATIC_FILE_PATH)
app.use(express.static(STATIC_FILE_PATH));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(` server running on port ${app.get('port')}`); 
});