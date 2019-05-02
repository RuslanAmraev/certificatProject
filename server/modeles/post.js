const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	city: String,
	phone: String,
	mark: String,
	model: String,
	year: String,
	price: String,
	body: String,
	engineVolume: String,
	transmission: String,
	color: String,
	drive: String,
	custom: String,
	info: Object,
	sellerText: String,
	views: {type: Number, default: 0},
	date: { type : Date, default: Date.now },
	mileage: String,
	rudder: String,
	bodyMenu: String,
	mainImg: {type: String},
	seller: String,
	condition: String,
	comments: [ { comment: String, user: String } ]
})

module.exports = Post = mongoose.model('Post', PostSchema);