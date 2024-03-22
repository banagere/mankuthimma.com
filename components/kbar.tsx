"use client";

import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
} from "kbar";
import { useRef, useState, forwardRef } from "react";
import { useRouter } from "next/router";

export default function KBar(props) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  const actions = [
    //   {
    //     id: "copy",
    //     name: "Copy Link",
    //     shortcut: ["l"],
    //     keywords: "copy-link",
    //     section: "General",
    //     perform: copyLink,
    //   },
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/"),
    },
    {
      id: "matches",
      name: "Matches",
      shortcut: ["m"],
      keywords: "go-matches",
      section: "Go To",
      perform: () => router.push("/matches"),
    },
    {
      id: "ranking",
      name: "Ranking",
      shortcut: ["r"],
      keywords: "go-ranking",
      section: "Go To",
      perform: () => router.push("/ranking"),
    },
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="box-border fixed inset-0 flex items-start justify-center w-full p-5 bg-black bg-opacity-50">
            <KBarAnimator className="max-w-lg overflow-hidden text-blue-500 bg-yellow-300 rounded-lg">
              <KBarSearch className="box-border w-full p-5 m-0 text-blue-600 bg-white" />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {props.children}
      </KBarProvider>
    </>
  );
}
