var express = require('express');
const gallery_controlers= require('../controllers/gallery');
var router = express.Router();
/* GET costumes */
router.get('/', gallery_controlers.gallery_view_all_Page );
module.exports = router;