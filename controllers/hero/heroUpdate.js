const { updateHero } = require('../../model/hero/index');

const heroUpdate = async (req, res, next) => {
  try {
    const { heroId } = req.params;
    const result = await updateHero(heroId, req.body);
    if (!heroId) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
      return;
    }
    if (!result) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Missing field',
      });
      return;
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = heroUpdate;
