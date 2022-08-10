const Post = require("../models/PostModal");
const getSinglePost = async (req, res) => {
	console.log("hello");
	try {
		const post = await Post.findById(req.params._id);

		res.json({ post });
	} catch (err) {
		() => console.log(err);
	}
};
module.exports = getSinglePost;
