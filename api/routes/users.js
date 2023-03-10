const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require("../models/User")

router.put('/:id', async function (req, res, next) {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (e) {
                return res.status(500).json(e)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json("Account has been updated")
        } catch (e) {
            return res.status(500).json(e)
        }
    } else {
        return res.status(403).json("You can update only your account")
    }
});

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted")
        } catch (e) {
            return res.status(500).json(e)
        }
    } else {
        return res.status(403).json("You can only delete your account")
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, updatedAt, ...otherDetails } = user._doc
        res.status(200).json(otherDetails)
    } catch (e) {
        return res.status(500).json(e)
    }
})

//follow

router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId);

            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("User has been followed")
            } else {

                res.status(403).json("You already follow this user")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can't follow")
    }
})

//unfollow
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId);

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json("User has been unfollowed")
            } else {

                res.status(403).json("You don't follow this user")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can't unfollow")
    }
})

module.exports = router;
