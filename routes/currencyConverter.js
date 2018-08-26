const express = require('express');
router = express.Router();
var oneUSD = 160;

router.post('/', function(req,res){
    var amount = req.body.amount;
    
    usdtolkr = amount * oneUSD;
    res.json(usdtolkr.toFixed(2));

});

module.exports = router;