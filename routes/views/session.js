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

		var q = keystone.list('Gallery').model.find(
      {
        key: key
      }
    );

		q.exec(function (err, results) {
      console.log(results);
			locals.data.sessions = results;
			next(err);
		});

	});

	// Render the view
	view.render('sessions');
  //
	// Gallery.model.find()
	// 	.where('key', key)
  //   .exec(function(err, session) {
  //
  //     console.log(session);
  //
	// 		// var id = category[0]._id;
	// 		// console.log(id);
	// 		view.query('galleries', keystone.list('Gallery').model.find(
	// 			// {
	// 			// 	categories: ObjectID(id)
	// 			// }
	// 		).sort('sortOrder'));
	// 		view.render('sessions');
  //   });

	// Load the galleries by sortOrder


	// Render the view

};
