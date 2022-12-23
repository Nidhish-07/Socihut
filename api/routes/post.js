const express = require('express');
const router = express.Router();
const Post = require("../models/Post")
const User = require("../models/User");



router.post("/", async function (req, res) {
  const newPost = new Post(req.body);
  try {
    const savedPost = newPost.save();
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json(error)
  }
})

//update
router.put("/:id", async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated")
    } else {
      res.status(403).json("You are not allowed to update this post")
    }
  } catch (error) {
    res.status(500).json(error)
  }
})


router.delete("/:id", async function (req, res) {
  try {

    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json("The post has been deleted")
    } else {
      res.status(403).json("You are not allowed to delete this post")
    }
  } catch (error) {
    res.status(500).json(error)
  }

})

//like/dislike

router.get("/:id", async function (req, res) {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})


//timeline
router.get("/timeline/all", async function (req, res) {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id })
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId })
      })
    )

    res.json(userPosts.concat(...friendPosts))

  } catch (error) {
    res.status(500).json(error)
  }
})








module.exports = router;
