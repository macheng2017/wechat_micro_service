const express = require('express')

const { wxtarget } = require('../middleware/target')
const { parse } = require('../middleware/parse')
const { goto } = require('../middleware/proxy')

const router = express.Router()

router.get('/:tag', (req, res) => {
  res.send(req.wxauth.result)
})

router.post('/:tag', parse, wxtarget, goto)

module.exports = router
