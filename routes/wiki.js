const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models');

router.get('/', (req, res, next) => {

  res.send('this is the GET wiki')
})

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const slug = req.body.slug;
  const content = req.body.content;
  const status = req.body.status;

  const page = new Page({
    title,
    slug,
    content,
    status
  })

  try {
    await page.save();
    console.log(page);
    res.redirect('/');
  }
  catch (error) {next(error)}
  // res.send('this is the POST wiki')
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router;
