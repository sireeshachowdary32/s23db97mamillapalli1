var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gallery_controller = require('../controllers/gallery');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/gallery/create', gallery_controller.gallery_create_post);
// DELETE request to delete Costume.
router.delete('/gallery/:id', gallery_controller.gallery_delete);
// PUT request to update Costume.
router.put('/gallery/update/:id', gallery_controller.gallery_update_put);
// GET request for one Costume.
router.get('/gallery/:id', gallery_controller.gallery_detail);
// GET request for list of all Costume items.
router.get('/gallery', gallery_controller.gallery_list);

// GET request for one costume.
router.get('/gallery/:id', gallery_controller.gallery_detail);

module.exports = router;