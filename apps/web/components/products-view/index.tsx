import { Suspense } from "react";
import ProductsCardGrid from "./products-grid";

export default function ProductsView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsCardGrid />
    </Suspense>
  );
}
