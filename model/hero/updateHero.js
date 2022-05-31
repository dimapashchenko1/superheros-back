const { Superheros } = require("../../schema/superheroModel");

const updateHero = async (heroId, body) => {
  const getHeroById = await Superheros.findOneAndUpdate(
    { heroId },
    { ...body },
    { new: true }
  );
  return getHeroById;
};
module.exports = updateHero;
