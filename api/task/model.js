// bu`Task` modeli buraya
const db = require("../../data/dbConfig")

const getAll = async () => {
    let allTasks = await db("tasks as t")
        .leftJoin(
            "projects as p",
            "t.project_id",
            "p.project_id"
            )
            .select(
                "t.*",
                "p.project_name",
                "p.project_description"
            );
    let mapped = allTasks.map(x => {
        return { ...x, task_completed: x.task_completed == 1 }
    });
    return mapped;
}

const getById = async (task_id) => {
    let task = await db("tasks")
        .where("task_id", task_id)
        .first();
    task.task_completed = task.task_completed == 1;
    return task;
}
const create = async (model) => {
    let [task_id] = await db("tasks").insert(model);
    return getById(task_id);
}

module.exports = {
    getAll,
    create,
    getById
}