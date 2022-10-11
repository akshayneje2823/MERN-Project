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
   
});

// // UPDATE Post

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