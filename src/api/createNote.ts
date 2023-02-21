import axios from "./config";
import { INote } from "../types/INote";

export const createNote = async (note: INote) => {
  const { data } = await axios.post("/notes", note);
  return data;
};
