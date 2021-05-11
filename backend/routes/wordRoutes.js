import express from 'express'
const router = express.Router()
import { getRandomWord, addWord } from '../controllers/wordController.js'

router.route('/').get(getRandomWord)
router.route('/').post(addWord)

export default router
