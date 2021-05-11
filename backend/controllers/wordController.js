import asyncHandler from 'express-async-handler'
import Word from '../models/wordModel.js'

const getRandomWord = asyncHandler(async (req, res) => {
  let n = await Word.count()
  let r = Math.floor(Math.random() * n)
  let randomElement = await Word.find().limit(1).skip(r)
  res.json(randomElement)
})
const addWord = asyncHandler(async (req, res) => {
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
