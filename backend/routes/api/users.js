const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a firstname with at least 4 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a lastname with at least 4 characters.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];
// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;
    const emailExisted = await User.findOne({ where: { email } });
const userExisted = await User.findOne({where:{username}})
    if (emailExisted) {
      res.status(403);
      res.json({

        "message": "User already exists",
        "statusCode": 403,
        "errors": {
          "email": "User with that email already exists"
        }
      })
    }
    if(userExisted){
      res.status(403);
      res.json({

        "message": "User already exists",
        "statusCode": 403,
        "errors": {
          "username": "User with that username already exists"
        }
      })
    }
    const user = await User.signup({ email, username, password, firstName, lastName });
   // console.log("USER",user)
    user.toJSON();//
    //console.log("JSON",user.toJSON())
    let token = await setTokenCookie(res, user);
    user.token = token;
    raw: true
    return res.json({
      "id": user.id,
      "username": user.username,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email":user.email,
      "token": token
    });
  }
);
//Define an instance method toSafeObject in the user.js model file. This method will return an object with only the User instance information that is safe to save to a JWT, like id, username, and email.

module.exports = router;