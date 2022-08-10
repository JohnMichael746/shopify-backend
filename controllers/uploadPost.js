const Post = require("../models/PostModal");

const uploadPost = async (req, res) => {
	try {
		const { title, photo_url, price, description, available } = req.body;
		if (!title || !photo_url || !price || !description || !available) {
			res.status(400).send(res.json("please upload all details"));
		} else {
			const post = new Post({
				title,
				photo_url,
				price,
				description,
				available,
			});
			post.save();
			res.json({ post, success: true });
		}
	} catch (err) {
		() => console.log(err);
	}
};
module.exports = uploadPost;
