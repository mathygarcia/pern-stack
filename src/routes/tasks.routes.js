const { Router } = require("express");

const {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require(
    '../controllers/tasks.controllers'
)
const router = Router();

//crear tarea
router.post('/tasks', createTask);

//obtener todas las tareas
router.get('/tasks', getAllTasks);

//obtener tarea
router.get('/tasks/:id', getTask);

//eliminar tarea
router.delete('/tasks/:id', deleteTask);

//actualizar tarea
router.put('/tasks/:id', updateTask);

module.exports = router;
