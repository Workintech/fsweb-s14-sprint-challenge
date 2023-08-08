// `Proje` modeli buraya
const db = require("../../data/dbConfig")

const getAll = async () => {
    let allProjects = await db("projects");
    let mapped = allProjects.map(x => {
        return {
            ...x,
            project_completed: x.project_completed == 1 }
    });
    return mapped;
}

const getById = async (project_id) => {
    let project = await db("projects")
        .where("project_id", project_id)
        .first();
    project.project_completed = project.project_completed == 1;
    return project;
}
const create = async (model) => {
    let [project_id] = await db("projects").insert(model);
    return getById(project_id);
}

module.exports = {
    getAll,
    getById,
    create
}

