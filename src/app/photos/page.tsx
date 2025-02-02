import Image from "next/image";

import dog1 from "./../../../public/images/dog1.png";
import dog2 from "./../../../public/images/dog2.png";
import dog3 from "./../../../public/images/dog3.png";
import dog4 from "./../../../public/images/dog4.png";

export default function PhotosPage() {
  return (
    <article>
      <h1 className="text-2xl mb-8 font-semibold">My Photos</h1>

      <ul className="grid grid-cols-2 gap-4">
        <li className="h-60 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={dog1}
            alt="Photo of my dog"
          />
        </li>
        <li className="h-60 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={dog2}
            alt="Photo of my dog"
          />
        </li>
        <li className="h-60 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={dog3}
            alt="Photo of my dog"
          />
        </li>
        <li className="h-60 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={dog4}
            alt="Photo of my dog"
          />
        </li>
      </ul>
    </article>
  );
}
