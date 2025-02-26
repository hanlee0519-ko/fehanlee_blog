import type { Metadata } from "next";
import Image from "next/image";

import dog1 from "./../../../public/images/dog1.png";
import dog2 from "./../../../public/images/dog2.png";
import dog3 from "./../../../public/images/dog3.png";
import dog4 from "./../../../public/images/dog4.png";

export const metadata: Metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  return (
    <article>
      <h1 className="mb-4 text-2xl">Page: Photos</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="relative h-60 overflow-hidden">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog1}
            alt="Photo of my dog"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={true}
            quality={50}
            placeholder="blur"
          />
        </li>
        <li className="relative h-60 overflow-hidden">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog2}
            alt="Photo of my dog"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={true}
            quality={50}
            placeholder="blur"
          />
        </li>
        <li className="relative h-60 overflow-hidden">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog3}
            alt="Photo of my dog"
            sizes="(max-width:768px) 100vw, 50vw"
            quality={50}
            placeholder="blur"
          />
        </li>
        <li className="relative h-60 overflow-hidden">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog4}
            alt="Photo of my dog"
            sizes="(max-width:768px) 100vw, 50vw"
            quality={50}
            placeholder="blur"
          />
        </li>
      </ul>
    </article>
  );
}
