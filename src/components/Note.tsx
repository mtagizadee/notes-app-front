import { FC } from "react";
import { INote } from "../types/INote";
import Box from "./ui/Box";

interface INoteProps {
  note: INote;
}

const Note: FC<INoteProps> = ({ note }) => {
  return (
    <Box className="w-full">
      <h3> {note.title} </h3>
      <p> {note.content} </p>
    </Box>
  );
};

export default Note;
