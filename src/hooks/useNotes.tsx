import { useEffect, useState } from "react";
import { fetchNotes } from "../api/fetchNotes";
import { INote } from "../types/INote";

const useNotes = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getNotes = async (query?: string) => {
    try {
      setIsLoading(true);

      const notes = await fetchNotes(query);
      setNotes(notes);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return { notes, isLoading, error, refetch: getNotes, setNotes };
};

export default useNotes;
