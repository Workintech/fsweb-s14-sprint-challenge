// `Resource` modeli buraya
const db = require("../../data/dbConfig")

const getAll = async () => {
    let allResources = await db("resources");
    return allResources;
}

const getById = async (resource_id) => {
    let resource = await db("resources")
        .where("resource_id", resource_id)
        .first();
    return resource;
}

const getByResourceName = async (resource_name) => {
    let resource = await db("resources")
        .where("resource_name", resource_name)
        .first();
    return resource;
}

const create = async (model) => {
    let [resource_id] = await db("resources").insert(model);
    return getById(resource_id);
}

module.exports = {
    getAll,
    create,
    getByResourceName
}