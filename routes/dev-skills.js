var express = require("express");
var router = express.Router();
const devSkillsCtrl = require("../controllers/dev-skills");
//all paths start with /dev-skills

router.get("/", devSkillsCtrl.index);
router.get("/new", devSkillsCtrl.new);
router.get("/:id", devSkillsCtrl.showOne);
router.get("/edit/:id", devSkillsCtrl.editSkill);
router.put("/edit/:id", devSkillsCtrl.update);
router.post("/", devSkillsCtrl.create);
router.delete("/:id", devSkillsCtrl.delete);
module.exports = router;
