import { kv } from "@vercel/kv";

export default async function listMyKeys() {
  const allKeys = await kv.keys("*");
  // const one = await kv.get(allKeys[5]);

  const allValues = await Promise.all(allKeys.map((key) => kv.get(key)));
  const valuesString = allValues.join(",");

  return valuesString;
}
