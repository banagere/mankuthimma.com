// External Libraries
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// Internal Libraries
import prisma from "components/prisma";

// Constants
const METHOD_NOT_ALLOWED = 405;
const INTERNAL_SERVER_ERROR = 500;

// Helper function to handle GET request
async function handleGet(slug: string) {
  return await prisma.post.findUnique({
    where: { slug },
  });
}

// Helper function to handle POST request
async function handlePost(slug: string) {
  return await prisma.post.upsert({
    where: { slug },
    create: { slug, views: 1 },
    update: { views: { increment: 1 } },
  });
}

// Main API handler
export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Validate and parse the slug from the request
    const slug = z.string().parse(req.query.slug);

    // Switch based on HTTP method
    switch (req.method) {
      case "GET": {
        const post = await handleGet(slug);
        res.json(post?.views || 1);
        break;
      }

      case "POST": {
        const post = await handlePost(slug);
        res.json(post?.views || 1);
        break;
      }

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(METHOD_NOT_ALLOWED).send("Method Not Allowed");
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(INTERNAL_SERVER_ERROR).json({
      statusCode: INTERNAL_SERVER_ERROR,
      message: err.message,
    });
  }
}
