import { FC, FormEvent, useState, useContext } from "react";
import { createNote } from "../api/createNote";
import { contentValidationConstants } from "../constants";
import { NotesContext } from "../contexts/NotesProvider";
import usePopup from "../hooks/usePopup";
import { isNotEmpty, maxLength, minLength } from "../validators";
import Modal, { IModalProps } from "./Modal";
import Box from "./ui/Box";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { PopupType } from "./ui/Popup";

interface ICreateNoteModalProps extends Partial<IModalProps> {}
const CreateNoteModal: FC<ICreateNoteModalProps> = ({
  visible,
  onClose = () => {},
}) => {
  const { displayPopup } = usePopup();
  const { addToNotes } = useContext(NotesContext);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!isNotEmpty(title)) {
      setError("empty title");
      return;
    }

    if (!isNotEmpty(content)) {
      setError("empty content");
      return;
    }

    const minLengthCheker = minLength(contentValidationConstants.minLength);
    const maxLengthCheker = maxLength(contentValidationConstants.maxLength);

    if (!minLengthCheker(content)) {
      setError("min length");
      return;
    }

    if (!maxLengthCheker(content)) {
      setError("max length");
      return;
    }

    try {
      const note = await createNote({ title, content });
      addToNotes(note);
      displayPopup("Note was created successfully.", PopupType.Success);
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
            error={error === "empty title"}
            errorMessage="Title cannot be empty."
            name="title"
            label="Enter the title"
          />
          <Input
            error={isNotEmpty(error) && error !== "empty title"}
            errorMessage={
              error === "empty content"
                ? "Content cannot be empty."
                : error === "min length"
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

export default CreateNoteModal;
