import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@workspace/ui/components/card";
import Image from "next/image";
import { ProductsProps } from "@/lib/type";

export default function ProductsCard({
  products,
}: {
  products: ProductsProps;
}) {
  return (
    <Card>
      <CardContent>
        <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden">
          <Image
            src={products.image || "https://placehold.co/600x400"}
            alt={products.title}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle className="my-4">
          {products.title.length > 30
            ? products.title.slice(0, 30) + "..."
            : products.title}
        </CardTitle>
        <CardDescription>
          {products.description.length > 100
            ? products.description.slice(0, 100) + "..."
            : products.description}
        </CardDescription>
        <CardFooter className="flex flex-row gap-2 mt-4 justify-evenly">
          <p className="text-xl font-bold text-gray-500">₹{products.price}</p>
          <p className="text-gray-500">{products.rating.rate}</p>
          <p className="text-gray-500">{products.rating.count} In stock</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
