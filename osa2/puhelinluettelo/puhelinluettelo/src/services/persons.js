import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const add = newPerson => {
  const request = axios.post(baseUrl, newPerson);
  return request.then(response => response.data);
};

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`, id);
  return request;
};

export default { getAll, add, remove };
