/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").insert([
    {
      project_name: "Node",
      project_description: "Veritabanı tasarla",
      project_completed: false,
    },
  ]);
  await knex("resources").insert([
    {
      resource_name: "knexjs.org",
      resource_description: "knex hakkında dökümantasyon",
    },
  ]);
  await knex("tasks").insert([
    {
      task_description: "dökümantasyonu incele",
      task_notes: "incelediklerini dene",
      task_completed: true,
      project_id: 1,
    },
  ]);
  await knex("project_resources").insert([
    {
      project_id: 1,
      resource_id: 1,
    },
  ]);
};
