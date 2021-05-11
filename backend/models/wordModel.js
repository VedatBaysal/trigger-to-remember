import mongoose from 'mongoose'

const wordSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  tr: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  trueCount: {
    type: Number,
    required: true,
  },
  falseCount: {
    type: Number,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  },
})
const Word = mongoose.model('Word', wordSchema)

export default Word
