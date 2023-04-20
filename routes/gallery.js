var express = require('express');
const Gallery_controllers= require('../controllers/gallery');
var router = express.Router();
/* GET costumes */
router.get('/', Gallery_controllers.gallery_view_all_Page );
router.get('/detail', Gallery_controllers.gallery_view_one_Page);
/* GET create costume page */
router.get('/create', Gallery_controllers.gallery_create_Page);
/* GET create costume page */
/* GET create update page */
router.get('/update', Gallery_controllers.gallery_update_Page);
/* GET delete costume page */
router.get('/delete', Gallery_controllers.gallery_delete_Page);

module.exports = router;