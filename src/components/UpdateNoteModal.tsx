import { FC, FormEvent, useState, useContext } from "react";
import { updateNote } from "../api/updateNote";
import { contentValidationConstants } from "../constants";
import { NotesContext } from "../contexts/NotesProvider";
import { undefineEmptyValues } from "../helpers";
import usePopup from "../hooks/usePopup";
import { isNotEmpty, maxLength, minLength } from "../validators";
import Modal, { IModalProps } from "./Modal";
import Box from "./ui/Box";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { PopupType } from "./ui/Popup";

interface IUpdateNoteModal extends Partial<IModalProps> {
  id: number;
}

const UpdateNoteModal: FC<IUpdateNoteModal> = ({
  visible,
  onClose = () => {},
  id,
}) => {
  const { displayPopup } = usePopup();
  const { updateInNotes } = useContext(NotesContext);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const minLengthCheker = minLength(contentValidationConstants.minLength);
    const maxLengthCheker = maxLength(contentValidationConstants.maxLength);

    if (isNotEmpty(content) && !minLengthCheker(content)) {
      setError("min length");
      return;
    }

    if (isNotEmpty(content) && !maxLengthCheker(content)) {
      setError("max length");
      return;
    }

    try {
      const note = await updateNote(
        id,
        undefineEmptyValues({ title, content })
      );
      updateInNotes(id, note);
      displayPopup("Note was updated successfully.", PopupType.Success);
    } catch (error) {
      displayPopup("Something went wrong", PopupType.Error);
    } finally {
      onClose();
    }
  };

  return (
    <Modal visible={visible as boolean} onClose={onClose as () => void}>
      <Box className="box-600">
        <form onSubmit={onSubmit}>
          <Input
            errorMessage="Title cannot be empty."
            name="title"
            label="Enter the title"
          />
          <Input
            error={isNotEmpty(error)}
            errorMessage={
              error === "min length"
                ? `Content must be at least ${contentValidationConstants.minLength} characters long.`
                : error === "max length"
                ? `Content must be at most ${contentValidationConstants.maxLength} characters long.`
                : ""
            }
            className="my-6"
            name="content"
            label="Enter the content"
          />

          <Button type="submit"> Submit </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UpdateNoteModal;
