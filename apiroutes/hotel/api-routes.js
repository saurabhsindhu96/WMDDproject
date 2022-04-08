"use strict";
module.exports = (router) => {

const { Router } = require('express')
const hotel = require('../../controller/hotel/hotel')
const validator = require("../../helper/validator");



router.post('/api/post_data', validator.reservation, hotel.post_res)
router.get('/api/get_menu',hotel.get_menu)
return router;
}
