import { FaTrash, FaCheck } from "react-icons/fa";
import { formatDate } from "../utils/formatDates.js";

const Task = ({ task, completeTask, removeTask }) => {
  return (
    <div
      className="task-container"
      style={{ backgroundColor: task.is_complete ? "#787878" : "#b5b5b5" }}
    >
      <div>
        <div className="task-header">
          <h4>{task.title}</h4>
          <div>
            {task?.is_complete === false ? (
              <button
                className="icon-btn"
                onClick={() => completeTask(task.id)}
              >
                <FaCheck />
              </button>
            ) : null}

            <button className="icon-btn" onClick={() => removeTask(task.id)}>
              <FaTrash />
            </button>
          </div>
        </div>

        <div className="task-description-container">{task.description}</div>

        <div className="task-due-date-container">
          <b>Entrega:</b>{" "}
          {task.due_date ? formatDate(task.due_date) : "Sem prazo"}
        </div>
      </div>
    </div>
  );
};

export default Task;
