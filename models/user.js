const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		phone: {
			type: Number,
			trim: true,
			required: true,
		},
		email: {
			type: String,

			required: true,
			unique: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
			min: 8,
			max: 16,
		},
		cart: {
			type: Array,
			default: [],
		},
		newCart: {
			type: Array,
			default: [],
		},

		about: {},
		photo: String,
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("User", userSchema);
