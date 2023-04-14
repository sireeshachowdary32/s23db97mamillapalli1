var Gallery = require('../models/gallery');
// List of all Costumes

exports.gallery_list = async function(req, res) {
try{
thegallery = await Gallery.find();
res.send(thegallery);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};



// for a specific Costume.

exports.gallery_detail = async function(req, res) {
try{
    thegallery = await Gallery.find();
res.send(thegallery);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}

};


// Handle Costume create on POST.

exports.gallery_create_post = async function(req, res) {
try{
    thegallery = await Gallery.find();
res.send(thegallery);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}

};


// Handle Costume delete form on DELETE.

exports.gallery_delete = async function(req, res) {
try{
    thegallery = await Gallery.find();
res.send(thegallery);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

 //res.send('NOT IMPLEMENTED: Gallery delete DELETE ' + req.params.id);

// Handle Costume update form on PUT.
exports.gallery_update_put = async function(req, res) {
try{
    thegallery = await Gallery.find();
res.send(thegallery);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
//VIEWS
// Handle a show all view
exports.gallery_view_all_Page = async function(req, res) {
 try{
    theGallery = await Gallery.find();
 res.render('gallery', { title: 'Gallery Search Results', results: theGallery });
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};
// Handle Costume create on POST.
exports.gallery_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gallery();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json objectnpm
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.gallery_type = req.body.gallery_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // for a specific Costume.
exports.gallery_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Gallery.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };



