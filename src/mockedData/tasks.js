import { nanoid } from "nanoid";

export const tasks = [
  { id: nanoid(), title: "JS", isDone: true },
  { id: nanoid(), title: "TS", isDone: false },
  { id: nanoid(), title: "Redux", isDone: true },
];
