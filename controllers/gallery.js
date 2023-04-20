var Gallery = require('../models/gallery');
// List of all Costumes

exports.gallery_list = async function(req, res) {
try{
    result = await Gallery.find();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};



// for a specific Costume.

exports.gallery_detail = async function(req, res) {
try{
    result = await Gallery.find();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}

};


// Handle Costume create on POST.

exports.gallery_create_post = async function(req, res) {
try{
    result = await Gallery.find();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}

};


// Handle Costume delete form on DELETE.

exports.gallery_delete = async function(req, res) {
try{
    result = await Gallery.find();
res.send(result);
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
    result = await Gallery.find();
res.send(result);
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
    console.log("view page")
    result = await Gallery.find();
 res.render('gallery', { title: 'Gallery Search Results', results: result });
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
    document.gallery_name = req.body.gallery_name;
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

   // Handle Costume update form on PUT.
exports.gallery_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Gallery.findById( req.params.id)
 // Do updates of properties
 if(req.body.gallery_name)
 toUpdate.gallery_name = req.body.gallery_name;
 if(req.body.size) toUpdate.size = req.body.size;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle Costume delete on DELETE.
exports.gallery_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Gallery.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle a show one view with id specified by query
exports.gallery_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Gallery.findById( req.query.id)
    res.render('gallerydetail',
   { title: 'Gallery Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gallery_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('gallerycreate', { title: 'Gallery Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a costume.
// query provides the id
exports.gallery_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Gallery.findById(req.query.id)
    res.render('galleryupdate', { title: 'Gallery Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.gallery_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Gallery.findById(req.query.id)
    res.render('gallerydelete', { title: 'Gallery Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


