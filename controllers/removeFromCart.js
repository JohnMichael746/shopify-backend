const User = require("../models/user");
const removeFromCart = async (req, res) => {
	const date = req.params._id;
	const user_id = req.body.headers.id;

	console.log(date);
	const user = await User.findOne({ _id: req.body.headers.id });
	//console.log(user);

	//  user.newCart.forEach((item) => {
	//  	if (item.post._id == id) {
	//  		user.newCart.pop();
	//  	}
	//  });

	User.findOneAndUpdate(
		{ _id: user_id },
		{
			$pull: { newCart: { date: Number(date) } },
		},
		{ new: true }
	).then((result) => {
		res.status(200).send({
			success: true,
			message: "Item deleted successfully",
		});
	});
};

module.exports = removeFromCart;
