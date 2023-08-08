/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const defaultProjects = [
  { project_name: "React Ekran Tasarlama", project_description: "React kullanarak bootstrap css dahil edip ekran tasarla" },
  { project_name: "Kitaplık Uygulaması", project_description: "Flutter ile kitaplık uygulaması tasarlama" }
];
const defaultResources = [
  { resource_name: "Github", resource_description: "Github Repo Page" },
  { resource_name: "Google", resource_description: "Google Search Engine" },
  { resource_name: "ChatGPT", resource_description: "OpenAI ChatGPT" }
];
const defaultTasks = [
  { task_description: "React form component oluştur", task_notes: "Bootstrap kullanarak form ekranı tasarla", project_id: 1 },
  { task_description: "Flutter arayüzü oluştur", task_notes: "flutter componentlerinden cardView kullanarak arayüz oluştur", project_id: 2 },
  { task_description: "Flutter grid oluştur", task_notes: "flutter componentlerinden grid kullanarak listeleme ekranı oluştur", project_id: 2 }
];
const defaultProjectResources = [
  { project_id: 1, resource_id: 1 },
  { project_id: 1, resource_id: 2 },
  { project_id: 1, resource_id: 3 },
  { project_id: 2, resource_id: 1 },
  { project_id: 2, resource_id: 2 },
  { project_id: 2, resource_id: 3 }
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects_resources').truncate()
  await knex('tasks').truncate()
  await knex('resources').truncate()
  await knex('projects').truncate()
  
  
  

  await knex('projects').insert(defaultProjects);
  await knex('resources').insert(defaultResources);
  await knex('tasks').insert(defaultTasks);
  await knex('projects_resources').insert(defaultProjectResources);
};
