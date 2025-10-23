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
        <CardTitle>{products.title}</CardTitle>
        <CardDescription>{products.description}</CardDescription>
        <CardFooter className="flex flex-col gap-2">
          <p className="text-2xl text-gray-500">₹{products.price}</p>
          <p className="text-xl text-gray-500">{products.rating.rate}</p>
          <p className="text-2xl text-gray-500">
            {products.rating.count} In stock
          </p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
