const {Router} = require("express")
const router = Router();

const User = require("../models/userModel")

router.post("/add", (req,res) => {
    new User(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err)
    });
});

router.post("/authenticate", (req,res) => {
    User.findOne(req.body)
    .then((result) => {
        if(result){
            res.status(200).json(result)

        }else{
            res.status(401).json({message:"invalide credentials"})
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});


module.exports = router