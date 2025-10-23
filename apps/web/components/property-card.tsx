import { PropertyCardProps } from "@/lib/type";
import Image from "next/image";
import React from "react";

const PropertyCard: React.FC<PropertyCardProps> = ({
  description,
  title,
  rightImage,
  leftBottomImage,
  bottomTextLeft,
  bottomTextRight,
}) => {
  return (
    <section className="max-w-4xl mx-auto bg-white rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {/* Left Section */}
      <div className="lg:flex flex-col justify-between gap-4">
        <div className="bg-blue-900 flex flex-col justify-center p-10 h-[400px] text-blue-200">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-xl mt-2 text-blue-400">{description}</p>
        </div>

        <figure className="relative h-[400px]">
          <Image
            src={leftBottomImage}
            alt="Bedroom view"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <figcaption className="absolute bottom-0 w-full bg-black/40 p-6 text-white text-lg">
            {bottomTextLeft}
          </figcaption>
        </figure>
      </div>

      {/* Right Section */}
      <figure className="relative h-full">
        <Image
          src={rightImage}
          alt="Lifestyle image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <figcaption className="absolute bottom-0 w-full bg-black/40 p-6 text-white text-sm">
          {bottomTextRight}
        </figcaption>
      </figure>
    </section>
  );
};

export default PropertyCard;
