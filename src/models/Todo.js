import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;
