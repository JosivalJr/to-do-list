import HTTPReq from "../plugins/axios.js";

const path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/v1/task`;

const Routes = {
  getAllTasks: async () => {
    return await HTTPReq("GET", path, {});
  },

  createTask: async (data) => {
    return await HTTPReq("POST", path, {}, data);
  },

  completeTask: async (id, params) => {
    return await HTTPReq("GET", `${path}/complete/${id}`, { params });
  },

  deleteTask: async (id) => {
    return await HTTPReq("DELETE", `${path}/${id}`, {});
  },
};

export default Routes;
