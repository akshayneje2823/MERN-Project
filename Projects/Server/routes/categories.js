const router = require('express').Router();
const Category = require('../models/Categories');

router.post('/', async (req, res) => {
    const newCat = new Category(req.body)
    try {
        // const newCat = new Category({
        //     name:req.body.name
        // })
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/', async (req, res) => {
    try {
        const Cat = await Category.find()
        res.status(200).json(Cat)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router

// http://localhost:5000/api/posts/634667e347f1a7f2a42fc1c0