import { FormEvent, useState } from "react";
import NotesProvider, { NotesContext } from "../contexts/NotesProvider";
import useNotes from "../hooks/useNotes";
import CreateNoteModal from "./CreateNoteModal";
import Note from "./Note";
import Box from "./ui/Box";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Loader from "./ui/Loader";

const NotesList = () => {
  const { notes, isLoading, refetch, setNotes } = useNotes();
  const [modal, setModal] = useState<boolean>(false);

  if (isLoading) return <Loader />;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    refetch(query);
  };

  return (
    <NotesProvider setNotes={setNotes}>
      <div className="box-700">
        <form
          onSubmit={onSubmit}
          className="flex items-center p-3 gap-3 w-full"
        >
          <Input placeholder="Search..." className="w-full" name="query" />
          <Button className="w-[30%]" type="submit">
            Submit
          </Button>
        </form>
        <Box className="center-col gap-3 p-6">
          {notes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </Box>
      </div>
      <Button
        onClick={() => setModal(true)}
        className="fixed right-3 top-3 box-200"
      >
        Create a note
      </Button>
      <CreateNoteModal visible={modal} onClose={() => setModal(false)} />
    </NotesProvider>
  );
};

export default NotesList;
