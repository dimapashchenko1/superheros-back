const { Superheros } = require("../../schema/superheroModel");

const addHero = async (body) => {
  const hero = new Superheros({ ...body });
  await hero.save();
  return hero;
};

module.exports = addHero;
