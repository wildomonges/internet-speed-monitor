const express = require('express');
const router = express.Router();
const Report = require('../models/report');

router.get('/', async (req, res) => {
  const reports = await Report.find().sort({'date': 'asc'});
  res.json({reports: reports});
});

router.post('/', async (req, res) => {
  const { date, ping, upload, download } = req.body;
  const report = new Report({ date, ping, upload, download});
  await report.save();
  res.json({
    status: 'Report saved'
  });
});

module.exports = router;