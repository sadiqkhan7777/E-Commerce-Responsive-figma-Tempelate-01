import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
];

const Brands = () => {
  return (
    <div className="bg-black py-6 sm:py-10">
      <div className="max-w-frame mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center px-4 xl:px-0">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={0}
            width={0}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] max-h-[26px] lg:max-h-9 object-contain mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
