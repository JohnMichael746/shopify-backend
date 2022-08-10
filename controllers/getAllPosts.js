const Post = require("../models/PostModal");
const getAllPosts = async (req, res) => {
	try {
		const post = await Post.find();
		res.json({ post });
	} catch (err) {
		() => console.log(err);
	}
};
module.exports = getAllPosts;
