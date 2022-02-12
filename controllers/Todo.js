const TodoModel = require("../models/Todo");

//list all todo created
exports.getAllTodoTask = async (req, res) => {
    try {
        const Todolist = await TodoModel.find();
        if(Todolist)
            res.status(200).send(Todolist);
    } catch (error) {
        response.status(500).send(error)
    }
};
//loist todo by its id
exports.getTodoById = async (req, res) => {
    const {
        params: { id },
      } = req;
    try {
        const Todolist = await TodoModel.findById(id).exec();
        if(Todolist)
            res.status(200).send(Todolist);
    } catch (error) {
        response.status(500).send(error)
    }
};
//create todo task
exports.addTodo = async (req, res) => {
    const todo = new TodoModel({content:req.body.content});
    try {
        const addTodo = await todo.save();
        if(addTodo)
            res.status(200).send("Successfully Added")
    } catch (error) {
        response.status(500).send(error)
    }
};
//update a todo by its id
exports.updateTodoById = async (req, res) => {
    const {
        body,
        params: { id },
      } = req;
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(id,{ content: body.content }).exec();
        if(updatedTodo)
            res.status(200).send("Successfully updated");
    } catch (error) {
        response.status(500).send(error)
    }

};
//delete a todo by its id
exports.deleteTodoById = async(req, res) => {
    const {
        params: { id },
      } = req;
    try {
        const deleteTodo = await TodoModel.findByIdAndRemove(id).exec();
        if(deleteTodo)
            res.status(200).send("Sucessfully deleted");
    } catch (error) {
        response.status(500).send(error)
    }
};
