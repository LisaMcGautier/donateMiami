const userController=require('../../controllers/userController');
const router = require("express").Router();



// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router
  .route("/").post(userController.register)

  .get(userController.getFavorites);


module.exports = router;
