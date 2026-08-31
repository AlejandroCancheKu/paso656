import { redirect } from "next/navigation";

export default function OpinionPage() {
  redirect("/articulos?categoria=opinion");
}