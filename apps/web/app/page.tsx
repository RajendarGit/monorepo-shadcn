import Hero from "@/components/hero";
import PropertyCard from "@/components/property-card/property-card";

export default function Page() {
  return (
    <>
      <Hero />
      <PropertyCard
        title="Nike Inc. Limited"
        description="1234 Elm Street, Springfield, USA"
        rightImage="/images/nike-right.jpg"
        leftBottomImage="/images/nike-left-bottom.jpg"
        bottomTextLeft={
          <>
            <h2 className="text-4xl mb-2">Nike AIR</h2>
            <p className="text-md">
              Experience the sleek and stylish design of Nike shoes.
            </p>
          </>
        }
        bottomTextRight={
          <>
            <h2 className="text-4xl mb-2">$199.99</h2>
            <p className="text-lg">
              Experience the sleek and stylish design of Nike shoes.
            </p>
          </>
        }
      />
    </>
  );
}
