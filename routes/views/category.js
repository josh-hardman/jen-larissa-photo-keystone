var keystone = require('keystone');
var ObjectID = require('mongodb').ObjectID;

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var categoryName = req.params.category.toLowerCase();

	locals.category = categoryName;

	// Set locals
	locals.section = 'gallery';

  var PostCategory = keystone.list('PostCategory');

	PostCategory.model.find()
		.where('name', categoryName)
    .exec(function(err, category) {
			var id = category[0]._id;
			view.query('galleries', keystone.list('Gallery').model.find(
				{
					categories: ObjectID(id)
				}
			).sort('sortOrder'));
			view.render('category');
    });

	// Load the galleries by sortOrder


	// Render the view

};
