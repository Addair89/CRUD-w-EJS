const devSkills = [
    {
        id: 1029384,
        skill: "Debugging",
        description:
            "Use all your tools and knowledge to figure out why a bug is present and how to resolve it. Common techniques include: chrome dev tools, stack overflow, rubber-ducking, and google.",
    },
    {
        id: 5647389218,
        skill: "Attention to detail",
        description:
            "Minor syntax mistakes can cause problems in programming, its paramount to keep a keen eye on minor details in syntax.",
    },
    {
        id: 15263747,
        skill: "Adaptability",
        description:
            "Programming languages are updated frequently. What was once the best tool or option may now be outdated. Being adtaptable to new skills is a great quality to have as a programmer.",
    },
    {
        id: 695735143,
        skill: "Patience",
        description:
            "Learning to program is a very difficult task. Having patience with yourself can increase your mood and understanding.",
    },
];

const getAllSkills = () => {
    return devSkills;
};

const showOneSkill = (id) => {
    id = Number(id);
    return devSkills.find((skill) => skill.id === id);
};

const createSkill = (skill) => {
    skill.id = Date.now() % 1000000;
    devSkills.push(skill);
};

const updateSkill = (skillInfo, skillId) => {
    skillId = Number(skillId);
    devSkills.forEach((skill) => {
        if (skill.id === skillId) {
            skill.skill = skillInfo.skill;
            skill.description = skillInfo.description;
        }
    });
};

const deleteSkill = (id) => {
    id = Number(id);
    const idx = devSkills.findIndex((skill) => skill.id === id);
    devSkills.splice(idx, 1);
};

module.exports = {
    getAllSkills,
    showOneSkill,
    updateSkill,
    delete: deleteSkill,
    create: createSkill,
};
