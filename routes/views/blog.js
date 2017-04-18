var keystone = require('keystone');
var ObjectID = require('mongodb').ObjectID;

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var key = req.params.session;

	// Set locals
	locals.section = 'gallery';

  var Gallery = keystone.list('Gallery');

  locals.data = {
		sessions: []
	};


  // Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.find();

		q.exec(function (err, results) {
			locals.data.sessions = results;
			next(err);
		});

	});

	var PostCategory = keystone.list('PostCategory');

	PostCategory.model.find()
		.where('name', 'blog')
    .exec(function(err, category) {
			var id = category[0]._id;
			view.query('posts', keystone.list('Post').model.find(
				{
					categories: ObjectID(id)
				}
			).sort('sortOrder'));
			view.render('posts');
    });

};
