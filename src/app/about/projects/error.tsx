"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <>
      <article>
        <h3 className="text-2xl">오류가 발생 했습니다.</h3>
        <button
          className="p-4 mt-4 text-white bg-orange-500"
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
        >
          다시시도
        </button>
      </article>
    </>
  );
}
