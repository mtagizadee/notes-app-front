import axios from "./config";

export const deleteNote = async (id: number) => {
  const { data } = await axios.delete(`/notes/${id}`);
  return data;
};
