var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var ObjectID = require('mongodb').ObjectID;
var Email = require('keystone-email');
// var hbs = require('hbs');

// templateLocals.layout = false;



exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;



	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function (next) {

		var nodemailer = require('nodemailer');
		var mg = require('nodemailer-mailgun-transport');

		var auth = {
			auth: {
			  api_key: 'key-5ef048f07e34a7ef454ba57e48866c1e',
			  domain: 'jenlarissaphoto.com'
			}
		}

		var nodemailerMailgun = nodemailer.createTransport(mg(auth));

		var newEnquiry = new Enquiry.model();
		var updater = newEnquiry.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				nodemailerMailgun.sendMail({
					from: 'mailgun@jenlarissaphoto.com',
					to: 'jenlarissaphoto@gmail.com', // An array if you have multiple recipients.
					subject: 'Hey you, awesome!',
					text: 'Mailgun rocks, pow pow!',
					}, function (err, info) {
					if (err) {
					  console.log('Error: ' + err);
					}
					else {
					  console.log('Response: ' + info);
					}
				});
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	var PostCategory = keystone.list('PostCategory');

	PostCategory.model.find()
		.where('name', 'contact')
    .exec(function(err, category) {
			var id = category[0]._id;
			view.query('posts', keystone.list('Post').model.find(
				{
					categories: ObjectID(id)
				}
			).sort('sortOrder'));
			view.render('contact');
    });
};
