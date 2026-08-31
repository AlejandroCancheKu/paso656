import { redirect } from "next/navigation";

export default function PoliticaPage() {
  redirect("/articulos?categoria=politica");
}