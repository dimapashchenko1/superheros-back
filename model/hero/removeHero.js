const { Superheros } = require('../../schema/superheroModel');

const removeHero = async heroId => {
  try {
    const deleteHero = await Superheros.findByIdAndRemove(heroId);
    return deleteHero;
  } catch (error) {
    return null;
  }
};

module.exports = removeHero;
