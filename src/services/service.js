import axios from "axios";

async function GetAll() {
  const data = await axios.get("http://localhost:3030/tasks");
  return data.data;
}

async function InsertTask(title, description, date) {
  try {
    await axios.post("http://localhost:3030/tasks", {
      title,
      description,
      date,
    });
    return false;
  } catch (error) {
    console.log("error insert");
    return true;
  }
}

async function DeleteTask(id) {
  try {
    await axios.delete("http://localhost:3030/tasks/" + id);
  } catch (error) {
    console.log("error delete");
    return true;
  }
}

async function UpdateTask(id, title, description) {
  try {
    await axios.put("http://localhost:3030/tasks/" + id, {
      title,
      description,
    });
  } catch (error) {
    console.log("error update");
    return true;
  }
}

export { GetAll, InsertTask, DeleteTask, UpdateTask };
