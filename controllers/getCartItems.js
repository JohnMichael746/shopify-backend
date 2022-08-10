const User = require("../models/user");

const getCartItem = async (req, res) => {
	const id = req.params._id;
	const user = await User.findOne({ _id: id });
	return res.status(200).send({ message: "success", cartItems: user.newCart });
};
module.exports = getCartItem;
