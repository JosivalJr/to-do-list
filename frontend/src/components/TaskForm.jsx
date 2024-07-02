import { useState } from "react";
import { toast } from "react-toastify";

import Api from "../services/api.js";

const TaskForm = ({ setOpenModal, tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const createTask = ({ title, description, dueDate }) => {
    const body = {
      title,
      description,
      due_date: dueDate,
    };

    Api.createTask(body)
      .then(({ data, status }) => {
        if (data && status === 201) {
          const newTasks = [...tasks];
          newTasks.push(data);
          setTasks(newTasks);
          toast.success("Tarefa criada com sucesso.");
          setOpenModal(false);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Um erro inesperado ocorreu, entre em contato com a equipe responsável pela plataforma, ou tente novamente mais tarde."
        );
        setOpenModal(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      toast.warn(
        "Não foi possível criar uma nova tarefa, o campo 'Título' é obrigatório."
      );
      return;
    }
    createTask({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate(null);
  };

  return (
    <div className="create-task-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          value={description}
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Prazo </label>
        <br />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="create-task-btn">
          <button className="btn" onClick={() => setOpenModal(true)}>
            Criar Tarefa
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
