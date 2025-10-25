import { Suspense } from "react";
import ProductsCardGrid from "./products-grid";
import ProductsViewLoading from "./loading";

export default function ProductsView() {
  return (
    <Suspense fallback={<ProductsViewLoading />}>
      <ProductsCardGrid />
    </Suspense>
  );
}
