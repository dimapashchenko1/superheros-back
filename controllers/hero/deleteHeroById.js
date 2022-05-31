const { removeHero } = require("../../model/hero/index");

const deleteHeroById = async (req, res, next) => {
  try {
    const { heroId } = req.params;
    const result = await removeHero(heroId);
    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      message: "Remove success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteHeroById;
