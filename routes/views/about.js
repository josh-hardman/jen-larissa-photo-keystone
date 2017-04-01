var keystone = require('keystone');
var ObjectID = require('mongodb').ObjectID;

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	var PostCategory = keystone.list('PostCategory');

	PostCategory.model.find()
		.where('name', 'about')
    .exec(function(err, category) {
			var id = category[0]._id;
			view.query('posts', keystone.list('Post').model.find(
				{
					categories: ObjectID(id)
				}
			).sort('sortOrder'));
			view.render('about');
    });
};
