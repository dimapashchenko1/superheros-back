const { listHero } = require("../../model/hero/index");

const getAllHeros = async (req, res) => {
  try {
    const heros = await listHero();
    console.log(heros);

    res.json({
      status: "success",
      code: 200,
      data:  heros ,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllHeros;
