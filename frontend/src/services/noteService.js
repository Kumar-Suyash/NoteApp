import axios from "axios";

// Use your backend URL. Change to "/api/noteapp" if you're using Vite proxy.
const API_URL = "http://localhost:5000/api/noteapp";

export const getNotes = async () => {
  const res = await axios.get(API_URL);
  return res.data; // the controller may return an array or { success, payload }
};

export const createNote = async (noteData) => {
  const res = await axios.post(API_URL, noteData);
  return res.data;
};

export const updateNote = async (id, noteData) => {
  const res = await axios.put(`${API_URL}/${id}`, noteData);
  return res.data;
};

export const deleteNote = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
