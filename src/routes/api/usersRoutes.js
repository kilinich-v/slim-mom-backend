const express = require('express')
const router = express.Router()

const { validateAuth, validateCalc } = require('../../middleware/usersValidation')
const authMiddleware = require('../../middleware/authMiddleware')

const {
  getDayNormKcal,
  getSaveDayNormController,
  signup,
  login,
  logout,
} = require('../../controllers/usersControllers')

router.post('/public', getDayNormKcal)
router.post('/private', authMiddleware, validateCalc, getSaveDayNormController)
router.post('/signup', validateAuth, signup)
router.post('/login', validateAuth, login)
router.post('/logout', authMiddleware, logout)

module.exports = router
