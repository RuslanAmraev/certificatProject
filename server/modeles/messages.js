const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	u1: {type: Schema.Types.ObjectId, ref: 'User'},
	u2: {type: Schema.Types.ObjectId, ref: 'User'},
	messages:[{from: {type: Schema.Types.ObjectId ref: 'User'}, message: String}]
})