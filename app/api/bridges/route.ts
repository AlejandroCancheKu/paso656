import { NextResponse } from "next/server";
import { getBridges } from "@/app/lib/bridges";

export async function GET() {
  try {
    const results = await getBridges();

    return NextResponse.json({
      source: "Fideicomiso de Puentes Fronterizos de Chihuahua / TTI",
      bridges: results,
    });
  } catch {
    return NextResponse.json(
      {
        error: "No fue posible obtener los tiempos de los puentes.",
      },
      {
        status: 500,
      }
    );
  }
}