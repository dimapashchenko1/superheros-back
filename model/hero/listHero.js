const { Superheros } = require("../../schema/superheroModel");

const listHero = async () => {
  const allHeros = await Superheros.find({});
  return allHeros;
};

module.exports = listHero;
