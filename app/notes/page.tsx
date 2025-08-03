import { getNotes } from "@/lib/api";
import { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Notes Page",
};

export default async function NotesPage() {
  const response = await getNotes("", 1);

  return <section>{response?.notes?.length > 0 && <NotesClient />}</section>;
}
