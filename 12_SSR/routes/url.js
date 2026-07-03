const express = require("express");
const router = express.Router();
const newUrlController = require("../controllers/url");

//post
router.post("/",newUrlController.generateShortUrl);

//get
router.get("/",newUrlController.getAllUrl);

//get/:shortUrl
router.get("/:shortUrl",newUrlController.getUrlByShortUrl);

//anyaltics by shortUrl
router.get("/analytics/:shortUrl",newUrlController.getAnalyticsByShortUrl);

module.exports = router;