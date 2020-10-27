const express = require('express');
const router = express.Router()

const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if(user) {
      return res.status(422).json({ errors: [`${email} has already been registered`]});
    }
    // create a new user
    const newUser = await new User({
      email,
    }).save()
    .then(
      res.status(200).json({message: [`${email} has been registered`]})
    );
  }
  catch(error) {
    console.error(error);
    res.status(500).json({
      "errors":
      ["Error signing up. Please try again!"]
    });
  }
})
module.exports = router
