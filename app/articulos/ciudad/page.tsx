import { redirect } from "next/navigation";

export default function CiudadPage() {
  redirect("/articulos?categoria=ciudad");
}