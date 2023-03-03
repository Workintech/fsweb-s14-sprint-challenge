// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};
const insert = async (resource) => {
  const [resource_id] = await db("resources").insert(resource);
  const newResource = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return newResource;
};
module.exports = {
  getAll,
  insert,
};
