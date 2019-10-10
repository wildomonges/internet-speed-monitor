const express = require('express');
const router = express.Router();
const Report = require('../models/report');

router.get('/', async (req, res) => {
  const reports = await Report.find().sort({ 'date': 'asc' });
  res.json({ reports: reports });
});

router.post('/', async (req, res) => {
  const regExp = /^\.*(\d+\.?\d*)$/
  const { date, ping, upload, download } = req.body;
  const uploadRegExp = upload.match(regExp)
  const downloadRegExpr = download.match(regExp)

  if (uploadRegExp !== null && downloadRegExpr !== null) {
    const report = new Report({
      date: date,
      ping: ping,
      download: downloadRegExpr[1],
      upload: uploadRegExp[1],
    });
    await report.save();
    res.json({ status: 'Report saved' });
  } else {
    res.status(500).send('Validation issue');
  }

});

module.exports = router;