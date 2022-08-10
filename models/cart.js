const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	items: {
		type: Array,
	},
});
