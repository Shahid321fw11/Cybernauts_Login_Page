const router = require("express").Router();
const { User} = require("../model/user.js");
// const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    // const { error } = validate(req.body);
    // if (error){
    //   console.log("check error")
    //   return res.status(400).send({ message: error.details[0].message });
    // }
    
    const user = await User.findOne({ email: req.body.email });
    if (user)
    return res
    .status(409)
    .send({ message: "User with given email already Exist!" });
    
    // const salt = await bcrypt.genSalt(Number(process.env.SALT));
    // const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log("hello")
    await new User({ ...req.body}).save();
    console.log("checcchchch")
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
