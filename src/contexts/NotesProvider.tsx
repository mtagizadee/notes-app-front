import React, { createContext, ReactNode, useState, FC } from "react";
import { INote } from "../types/INote";

interface INotesProviderProps {
  children: ReactNode;
  setNotes: (args: any) => void;
}

export type TNotesContext = {
  deleteFromNotes: (id: number) => void;
  updateInNotes: (id: number, updatedNote: INote) => void;
};

export const NotesContext = createContext<TNotesContext>({} as any);

const NotesProvider: FC<INotesProviderProps> = ({ children, setNotes }) => {
  const deleteFromNotes = (id: number) => {
    setNotes((prev: INote[]) => prev.filter((note: INote) => note.id !== id));
  };

  const updateInNotes = (id: number, updatedNote: INote) => {
    setNotes((prev: INote[]) =>
      prev.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  return (
    <NotesContext.Provider value={{ deleteFromNotes, updateInNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
