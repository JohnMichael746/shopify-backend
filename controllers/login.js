const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginUser = async (req, res) => {
	console.log(req.body);
	try {
		console.log(req.body);
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).send("no userrrrr found");
		}
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res.status(400).send("No users Found");
		}
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		user.password = undefined;
		user.secret = undefined;
		// console.log(token);
		res.json({
			token,
			user,
		});
	} catch (err) {
		() => {
			console.log(err);
		};
	}
};
module.exports = loginUser;
