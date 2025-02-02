import React from "react";

export default function PhotosPage() {
  return (
    <article>
      <h1 className="text-2xl mb-8 font-semibold">My Photos</h1>

      <ul className="grid grid-cols-2 gap-4">
        <li className="h-60 overflow-hidden">
          <img className="object-cover w-full h-full" src="/images/dog1.png" />
        </li>
        <li className="h-60 overflow-hidden">
          <img className="object-cover w-full h-full" src="/images/dog2.png" />
        </li>
        <li className="h-60 overflow-hidden">
          <img className="object-cover w-full h-full" src="/images/dog3.png" />
        </li>
        <li className="h-60 overflow-hidden">
          <img className="object-cover w-full h-full" src="/images/dog4.png" />
        </li>
      </ul>
    </article>
  );
}
