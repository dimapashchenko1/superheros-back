const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: [false, 'Set nickname for Superhero'],
    },
    real_name: {
      type: String,
      default: 'No real name',
    },
    origin_description: {
      type: String,
      default: 'No description',
    },
    superpowers: {
      type: String,
      default: 'No superpowers',
    },
    catch_phrase: {
      type: String,
      default: 'No catch phrase',
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { versionKey: false, timestamps: false },
);

const Superheros = mongoose.model('Superhero', superheroSchema);

module.exports = { Superheros };
