var Gallery = require('../models/gallery');
// List of all Costumes
exports.gallery_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Gallery list');
};
// for a specific Costume.
exports.gallery_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Gallery detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.costume_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Gallery create POST');
};
// Handle Costume delete form on DELETE.
exports.gallery_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Gallery delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.gallery_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Gallery update PUT' + req.params.id);
};