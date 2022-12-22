const express = require('express')
const Add = require('./Add')

const router = express.Router();

router.post('/add', async(req,res) =>{
try {
    const newitem = new Add(req.body)
    await newitem.save();
    res.send('item added suucessfully')
} catch (error) {
    res.status(400).json(error)
}
})


router.get('/',async(req,res) =>{
  try {
    const item = await Add.find()
    res.send(item)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/edit', async (req,res) =>{
  try {
    await Add.findOneAndUpdate({_id : req.body._id}, req.body)
    res.send("data updated")
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router;