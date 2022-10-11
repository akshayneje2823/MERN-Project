const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


// Create New Post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    } catch (error) {
        res.status(500).json(error)
    }
});


// Update Post 
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedPost)
            } catch (error) {
                res.status(500).json(error)
            }

        } else {
            res.status(401).json("You can update only your Post..!")
        }


    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE Post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post Has been deleted....")
            } catch (error) {
                res.status(500).json(error)
            }

        } else {
            res.status(401).json("You can delete only your Post..!")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// // GET Post
// router.get('/:id', async (req, res) => {
//     // try {
//     //     const user = await User.findById(req.params.id);
//     //     const { password, ...others } = user._doc;
//     //     res.status(200).json(others)
//     // } catch (error) {
//     //     res.status(500).json(error)
//     // }
// })

module.exports = router