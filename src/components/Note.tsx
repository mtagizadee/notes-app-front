import { FC, useState, useContext } from "react";
import { INote } from "../types/INote";
import Box from "./ui/Box";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import WarningModal from "./ui/WarningModal";
import { deleteNote } from "../api/deleteNote";
import { NotesContext } from "../contexts/NotesProvider";
import usePopup from "../hooks/usePopup";
import { PopupType } from "./ui/Popup";
import UpdateNoteModal from "./UpdateNoteModal";

interface INoteProps {
  note: INote;
}

const Note: FC<INoteProps> = ({ note }) => {
  const [warningModal, setWarningModal] = useState<boolean>(false);
  const { deleteFromNotes, updateInNotes } = useContext(NotesContext);
  const { displayPopup } = usePopup();
  const [updateModal, setUpdateModal] = useState<boolean>(false);

  return (
    <>
      <Box className="w-full relative">
        <div className="absolute center-row gap-3 right-3 top-2">
          <FiEdit2
            onClick={() => setUpdateModal(true)}
            className="cursor-pointer"
          />
          <FiTrash2
            onClick={() => setWarningModal(true)}
            className="cursor-pointer"
          />
        </div>

        <h3> {note.title} </h3>
        <p> {note.content} </p>
      </Box>
      <WarningModal
        onClose={() => setWarningModal(false)}
        onConfirm={async () => {
          try {
            await deleteNote(note.id as number);
            deleteFromNotes(note.id as number);
            displayPopup("Note was deleted successfully.", PopupType.Success);
          } catch (error) {
            displayPopup("Something went wrong.", PopupType.Error);
          }
        }}
        visible={warningModal}
      >
        Are you sure you want to delete this note?
      </WarningModal>
      <UpdateNoteModal
        onClose={() => setUpdateModal(false)}
        visible={updateModal}
        id={note.id as number}
      />
    </>
  );
};

export default Note;
