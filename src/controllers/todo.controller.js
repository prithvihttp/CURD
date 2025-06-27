import { Todo } from "../models/todo.model.js"

//create
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;   //req.body to accept data
    // console.log(title, description);

    const newTodo = await Todo.create({
      title,
      description
    });

    res.status(201).json(newTodo);   //.json to response back to the client
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//read  all
export const getTodo = async (req, res) => {
  try {
    const readallTodos = await Todo.find(); // Fetch all todos
    res.status(200).json(readallTodos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//read one
export const getTodoById = async (req,res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.statur(500).json({message: error.message});
  }
  
}


//update
export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(  
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//delete
export const deleteTodo = async(req,res) => {
  try {
    const deletedtodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteTodo)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}






