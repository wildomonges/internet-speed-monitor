const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReportSchema = new Schema({
  date: { type: Date, required: true },
  ping: { type: Number, required: true },
  download: { type: Number, required: true },
  upload: { type: Number, required: true }
});

module.exports = mongoose.model('Report', ReportSchema);
