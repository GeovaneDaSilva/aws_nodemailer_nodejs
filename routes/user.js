'use strict'

const express = require('express');
const userController = require('../controllers/user')




// Init Var
let router = express.Router();
 


router.get('/email', userController.email); // SEND EMAIL





module.exports = router;