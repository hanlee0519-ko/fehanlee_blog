export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay is End");
    }, ms);
  });
}
