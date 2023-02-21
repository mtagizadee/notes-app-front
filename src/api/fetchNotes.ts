import { INote } from "../types/INote";
import axios from "./config";

export const fetchNotes = async (query?: string) => {
  const { data } = await axios.get<INote[]>(`/notes`, { params: { query } });
  return data;
};
