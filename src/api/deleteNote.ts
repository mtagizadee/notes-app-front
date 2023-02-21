import axios from "./config";

export const deleteNote = async (id: string) => {
  const { data } = await axios.delete(`/notes/${id}`);
  return data;
};
