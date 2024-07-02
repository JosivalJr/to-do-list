import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Task, TaskForm, Modal, Search, Filter, Sort } from "../components";
import { TaskAppContainer } from "../style/HomeStyle.jsx";

import Api from "../services/api.js";

const unespectedError = () => {
  toast.error(
    "Um erro inesperado ocorreu, entre em contato com a equipe responsável pela plataforma, ou tente novamente mais tarde."
  );
};

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");

  useEffect(() => {
    Api.getAllTasks()
      .then(({ data, status }) => {
        if (data && status === 200) setTasks(data);
      })
      .catch((error) => {
        console.error(error);
        unespectedError();
      });
  }, []);

  const removeTask = (id) => {
    Api.deleteTask(id)
      .then(({ status }) => {
        if (status === 204) {
          const newTasks = [...tasks];
          const filteredTasks = newTasks.filter((task) =>
            task.id !== id ? task : null
          );
          toast.success("Tarefa foi removida com sucesso.");
          setTasks(filteredTasks);
        }
      })
      .catch((error) => {
        console.error(error);
        unespectedError();
      });
  };

  const completeTask = (id) => {
    Api.completeTask(id, { is_complete: true })
      .then(({ status }) => {
        if (status === 202) {
          const newTasks = [...tasks];
          newTasks.map((task) =>
            task.id === id ? (task.is_complete = true) : task
          );
          toast.success("Tarefa foi finalizada com sucesso.");
          setTasks(newTasks);
        }
      })
      .catch((error) => {
        console.error(error);
        unespectedError();
      });
  };

  return (
    <>
      <TaskAppContainer>
        <h1>Tarefas</h1>

        <div className="task-manage-list">
          <Filter filter={filter} setFilter={setFilter} />
          <Search search={search} setSearch={setSearch} />
          <Sort setSort={setSort} />
        </div>

        <div className="task-container-list">
          {tasks
            .filter((task) =>
              filter === "All"
                ? true
                : filter === "completed"
                ? task.is_complete
                : !task.is_complete
            )
            .filter((task) =>
              task.title.toLowerCase().includes(search.toLowerCase())
            ).length === 0 ? (
            <div>Não há tarefas a serem exibidas</div>
          ) : (
            tasks
              .filter((task) =>
                filter === "All"
                  ? true
                  : filter === "completed"
                  ? task.is_complete
                  : !task.is_complete
              )
              .filter((task) =>
                task.title.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) =>
                sort === "Asc"
                  ? a.title.localeCompare(b.title)
                  : b.title.localeCompare(a.title)
              )
              .map((task, index) => (
                <Task
                  key={index}
                  index={index}
                  task={task}
                  completeTask={completeTask}
                  removeTask={removeTask}
                />
              ))
          )}
        </div>
        <div className="create-task-btn-container">
          <button className="btn" onClick={() => setOpenModal(true)}>
            Criar Tarefa
          </button>
        </div>
      </TaskAppContainer>

      <Modal isOpen={openModal} setOpenModal={setOpenModal}>
        <TaskForm
          setOpenModal={setOpenModal}
          tasks={tasks}
          setTasks={setTasks}
        />
      </Modal>
    </>
  );
};

export default Home;
