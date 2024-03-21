import Image from "next/image";
import Link from "next/link";
// import ViewCounter from "@/components/view-counter";
import ViewCounter from "components/view-counter";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <Link
        href="https://vercel.com/templates/next.js/kv-redis-starter"
        className="flex px-10 py-2 mt-20 space-x-1 text-sm font-medium text-gray-600 transition-all rounded-full shadow-sm group sm:mt-0 bg-white/30 ring-1 ring-gray-900/5 hover:shadow-lg active:shadow-sm"
      >
        <p>Deploy your own to Vercel</p>
        {/* <ExpandingArrow /> */}
      </Link>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        KV on Vercel
      </h1>
      <div className="w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">
              Announcing Vercel KV for Redis
            </h2>
            <p className="text-sm text-gray-500">
              The best description in the world
            </p>
          </div>
          <Suspense>
            {/* <ViewCounter /> */}
          </Suspense>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <p className="w-full max-w-lg mt-6 font-light text-center text-gray-600">
        <Link
          href="https://vercel.com/kv"
          className="font-medium underline transition-colors underline-offset-4 hover:text-black"
        >
          Vercel KV for Redis
        </Link>{" "}
        demo. Built with{" "}
        <Link
          href="https://nextjs.org/docs"
          className="font-medium underline transition-colors underline-offset-4 hover:text-black"
        >
          Next.js App Router
        </Link>
        .
      </p>
      <div className="flex justify-between w-full px-20 py-10 sm:absolute sm:bottom-0">
        <Link href="https://vercel.com">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/vercel/examples/tree/main/storage/kv-redis-starter"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  );
}
