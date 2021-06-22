import Cosmetics from "./../../assets/cosmetics.jpg";
import Fashion from "./../../assets/fashion1.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Directory = (props) => {
  return (
    <div className="wrap">
      <div className="item">
        <Image
          alt="Cosmetics"
          src={Cosmetics}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Link href="/cosmetics">Cosmetics</Link>
      </div>
      <div className="item">
        <Image
          alt="Fashion"
          src={Fashion}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Link href="/search/fashion">Fashion</Link>
      </div>
    </div>
  );
};

export default Directory;
