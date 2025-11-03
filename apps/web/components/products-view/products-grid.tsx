import { getProducts } from "@/lib/get-product";
import { ProductsProps } from "@/lib/type";
import ProductsCard from "./products-card";

export default async function ProductsCardGrid() {
  const products: ProductsProps[] = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: ProductsProps) => (
        <ProductsCard
          key={product.id}
          products={{
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            rating: product.rating,
          }}
        />
      ))}
    </div>
  );
}
