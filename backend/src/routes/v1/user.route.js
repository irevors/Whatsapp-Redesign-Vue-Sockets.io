const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .post(auth.authUser(), validate(userValidation.createUser), userController.createUser)
  .get(auth.authUser(), userController.getUsers);

router
  .route('/:userId')
  .get(auth.authUser(), userController.getUser)
  .patch(auth.authUser(), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth.authUser(), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
