const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, ".." , "views", "index.html"));
});

module.exports = router;