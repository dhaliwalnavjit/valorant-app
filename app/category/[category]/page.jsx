"use client";

import Loader from "@/components/Loader/Loader";
import TileGrid from "@/components/TileGrid/TileGrid";
import { Suspense } from "react";

export default function CategoryPage({ params: { category } }) {
  return (
    <Suspense fallback={<Loader />}>
      <TileGrid category={category} />
    </Suspense>
  );
}
