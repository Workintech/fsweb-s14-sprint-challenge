const projectModel = require("../project/model");

const validatePayload = (req, res, next) => {
    try {
        let { task_description, project_id } = req.body;
        if (!task_description || !project_id) {
            res.status(400).json({ message: "Eksik alan var" });
        }
        else {
            next();
        }
    } catch (error) {
        next(error);
    }
}

const validateProjectId = async (req, res, next) => {
    try {
        let { project_id } = req.body;
        const isExistProject = await projectModel.getById(project_id);
        if (!isExistProject) {
            res.status(404).json({ message: "projectId yanlış" })
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    validatePayload,
    validateProjectId
}