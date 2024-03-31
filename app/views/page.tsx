import { kv } from "@vercel/kv";

export default async function listMyKeys() {
  const allKeys = await kv.keys("*");
  const one = await kv.get(allKeys[0]);

  //   for (const i in allKeys) {
  //     const v = await kv.get[i];
  //   }

  //   let keyValuePairs = {};

  //   for (const key of allKeys) {
  //     const value = await kv.get(key);
  //     keyValuePairs[key] = value;
  //   }

  return allKeys;
}
