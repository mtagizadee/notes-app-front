import { INote } from "../types/INote";
import axios from "./config";

export const updateNote = async (id: number, note: Partial<INote>) => {
  const { data } = await axios.patch(`/notes/${id}`, note);
  return data;
};
