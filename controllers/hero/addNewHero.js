const { addHero, listHero } = require("../../model/hero/index");
const { Superheros } = require("../../schema/superheroModel");
// const upload = require("../../middleware/upload");
const addNewHero = async (req, res, next) => {
  try {
    const result = await addHero(req.body);
    
      
    
  
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      }});
  
  
  } catch (error) {
    next(error);
  }
};

module.exports = addNewHero;
