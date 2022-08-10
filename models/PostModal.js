const mongoose = require("mongoose");
const { modelName } = require("./user");
const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		photo_url: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		available: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("post", postSchema);
