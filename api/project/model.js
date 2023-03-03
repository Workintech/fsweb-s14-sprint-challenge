// `Proje` modeli buraya
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  const project = projects.map((p) => {
    return {
      ...p,
      project_completed: p.project_completed ? true : false,
    };
  });
  return project;
}
async function insert(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = await db("projects")
    .where("project_id", project_id)
    .first();
  const projects = {
    ...newProject,
    project_completed: newProject.project_completed ? true : false,
  };
  return projects;
}
module.exports = {
  getAll,
  insert,
};
