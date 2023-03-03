// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

// select p.project_name,p.project_description,t.* from tasks as t
// left join project as p on t.project_id=p.project_id

const getAll = async () => {
  const task = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  const allTasks = task.map((p) => {
    return {
      ...p,
      task_completed: p.task_completed ? true : false,
    };
  });
  return allTasks;
};

const insert = async function (task) {
  const [insertedTaskId] = await db("tasks").insert(task);
  const newTask = await db("tasks").where("task_id", insertedTaskId).first();
  const projects = {
    ...newTask,
    task_completed: newTask.task_completed ? true : false,
  };
  return projects;
};
module.exports = {
  getAll,
  insert,
};
