// api/views/[slug].js or a similar API route
import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { slug } = req.query;

  // Ensure the slug is valid
  if (!slug) {
    return res.status(400).json({ error: "Slug is required" });
  }

  const key = `views-${slug}`; // Prefixing the key to avoid collisions
  const views = await kv.incr(key); // Increment the view count for this slug

  // Return the updated view count
  res.status(200).json({ views });
}
