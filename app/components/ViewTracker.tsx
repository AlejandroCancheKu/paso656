
"use client";

import { useEffect } from "react";

type ViewTrackerProps = {
  postId: number;
};

export default function ViewTracker({ postId }: ViewTrackerProps) {
  useEffect(() => {
    if (!postId) return;

    const controller = new AbortController();

    fetch("https://cms.paso656.com/wp-json/paso656/v1/lectura", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: postId,
      }),
      signal: controller.signal,
    }).catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Error al registrar la lectura:", error);
      }
    });

    return () => controller.abort();
  }, [postId]);

  return null;
}
