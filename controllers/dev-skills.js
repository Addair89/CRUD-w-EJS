const DevSkill = require("../models/dev-skill");

function index(req, res) {
    res.render("dev-skills/index", {
        skills: DevSkill.getAllSkills(),
        title: "All Skills",
    });
}

function showOne(req, res) {
    res.render("dev-skills/show-one", {
        skill: DevSkill.showOneSkill(req.params.id),
        title: "Skill",
    });
}

function newSkill(req, res) {
    res.render("dev-skills/new-skill", {
        title: "You Really think theres a skill not listed?",
    });
}

function create(req, res) {
    console.log(req.body);
    DevSkill.create(req.body);
    res.redirect("/dev-skills");
}

function deleteSkill(req, res) {
    DevSkill.delete(req.params.id);
    res.redirect("/dev-skills");
}

function editSkill(req, res) {
    res.render("dev-skills/edit-skill", {
        title: "Edit Skill",
        skill: DevSkill.showOneSkill(req.params.id),
    });
    console.log(req.params.id);
}

function update(req, res) {
    DevSkill.updateSkill(req.body, req.params.id);
    res.redirect("/dev-skills");
}

module.exports = {
    index,
    showOne,
    create,
    editSkill,
    update,
    delete: deleteSkill,
    new: newSkill,
};
