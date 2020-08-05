const express = require("express");
const router = express.Router();
const {
  postNote,
  getAll,
  Delete,
  edit,
  search,
  complete
} = require("../controllers/auth");

router.post("/postNote", postNote);

router.get("/getAll", getAll);
router.post("/edit", edit);
router.delete("/:id", Delete);
router.post("/search", search);
router.post("/complete", complete);


module.exports = router;
