const mongoose = require('mongoose');

const URI = 'mongodb://db:27017/internet-speed';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

module.exports = mongoose;