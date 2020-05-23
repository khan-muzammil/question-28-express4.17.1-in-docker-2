var express = require('express');
var router = express.Router();

/* add api */
router.post('/add', function(req, res) {
    try {
        const {number1, number2} = req.body;
        if(typeof number1 === 'number' && typeof number2==='number') {
            return res.send({"sum" : number1+number2});   
        }else {
            throw "Please enter valid number"
        }
    } catch (error) {
        return res.send(error)
    }
});

module.exports = router;
