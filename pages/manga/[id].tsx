import { useRouter } from "next/router";
import React from "react";

export default function Manga() {
  const router = useRouter();
  const id = router.query.id;

  return <div>{id}</div>;
}
