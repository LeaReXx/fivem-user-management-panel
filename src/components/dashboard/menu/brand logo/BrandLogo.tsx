import Image from "next/image";
import React from "react";

const BrandLogo: React.FC = () => {
  return (
    <div className="py-5 mx-auto">
      <Image
        src="/logo.png"
        alt="Logo"
        className="md:w-40"
        width={150}
        height={100}
        quality={50}
      />
    </div>
  );
};

export default BrandLogo;
