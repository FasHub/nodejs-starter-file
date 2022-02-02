const router = require('express').Router();

router.get('*', (req, res) => {
    res.send("Tikur Tech")
});

module.exports = router