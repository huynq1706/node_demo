import express from 'express';

const router = express.Router();

router.get('/products', (req,res)=> {
    res.json({
        mess:"hszbhush"
    })
});
module.exports = router;