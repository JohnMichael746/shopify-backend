const express = require("express");

const getAllPosts = require("../controllers/getAllPosts");
const getSinglePost = require("../controllers/getSinglePost");
const uploadPost = require("../controllers/uploadPost");
const getCartProducts = require("../controllers/getCartProducts");
const getCartItem = require("../controllers/getCartItems");
const removeFromCart = require("../controllers/removeFromCart");

const router = express.Router();
router.get("/get-post", getAllPosts);
router.post("/upload-post", uploadPost);
router.get("/get-single-post/:_id", getSinglePost);
router.post("/add-to-cart", getCartProducts);
router.get("/get-cart-items/:_id", getCartItem);
router.patch("/remove-item/:_id", removeFromCart);

module.exports = router;
