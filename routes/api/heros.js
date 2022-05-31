const express = require("express");
const router = express.Router();
const {
  getAllHeros,
  deleteHeroById,
  addNewHero,
  heroUpdate,
} = require("../../controllers/hero");

router.get("/", getAllHeros);

router.post("/", addNewHero);

router.delete("/:heroId", deleteHeroById);

router.put("/:heroId", heroUpdate);

module.exports = router;
