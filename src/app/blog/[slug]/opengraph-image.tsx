import { ImageResponse } from "next/og";

export const alt = "HAN Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const titles: { [key: string]: string } = {
  first: "First Blog",
  second: "Second Blog",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`HAN: ${titles[slug]}`}
      </div>
    ),
    {
      ...size,
    }
  );
}
