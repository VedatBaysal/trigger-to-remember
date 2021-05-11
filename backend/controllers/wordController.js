import asyncHandler from 'express-async-handler'
import Word from '../models/wordModel.js'

const getRandomWord = asyncHandler(async (req, res) => {
  res.json({
    test: 'test',
  })
})
const addWord = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { en, tr, type, trueCount, falseCount, frequency } = req.body

  const word = new Word({
    en,
    tr,
    type,
    trueCount,
    falseCount,
    frequency,
  })
  const createdWord = await word.save()
  res.status(201).json(createdWord)
})
export { getRandomWord, addWord }
