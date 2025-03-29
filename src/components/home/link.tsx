"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Links = ({
  className,
  side = "bottom",
}: {
  className?: string;
  side?: "top" | "bottom";
}) => {
  const pathname = usePathname(); // Get current path

  return (
    <div
      className={clsx(
        "links flex justify-between items-center gap-5 bg-gradient-to-t p-1 from-zinc-50 to-zinc-100 rounded-full border border-zinc-200",
        className,
        !className && "sm:flex hidden"
      )}
      style={{
        boxShadow: "-4px 15px 20px rgb(0,0,0,.05)",
      }}        
    >
      {/* Home Link */}
      <Link
        href="/"
        className={clsx(
          "hover:bg-zinc-200 p-2 rounded-full px-5",
          pathname === "/" &&
            "text-zinc-50 bg-gradient-to-t from-zinc-900 to-zinc-700"
        )}
      >
        <p className="font-semibold">Home</p>
      </Link>

      {/* About Link */}
      <Link
        href="/about"
        className={clsx(
          "hover:bg-zinc-200 p-2 rounded-full px-5",
          pathname === "/about" &&
            "text-zinc-50 bg-gradient-to-t from-zinc-900 to-zinc-700"
        )}
      >
        <p className="font-semibold hover:underline">About</p>
      </Link>

      {/* Socials Dropdown */}
      <div className="relative group">
        <div className="hover:bg-zinc-200 group text-zinc-900 hover:text-zinc-50 p-2 hover:bg-gradient-to-t from-zinc-900 to-zinc-700 rounded-full px-5 cursor-pointer">
          <p className="font-semibold hover:underline">Socials</p>
        </div>

        <div
          className={clsx(
            "hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex-col gap-2 p-2 absolute overflow-hidden bg-zinc-50 border rounded-xl",
            side === "bottom" ? "w-[200px]" : "bottom-1/2"
          )}
        >
          <a
            href="https://discord.com/invite/dyMuwaZfPf"
            target="_blank"
            className="flex p-2 w-full text-zinc-950 items-center gap-2 py-2 border-b"
          >
            <BsDiscord />
            Discord
          </a>
          <a
            href="https://github.com/ZathuraDbg/ZathuraDbg"
            target="_blank"
            className="flex p-2 text-zinc-950 w-full items-center gap-2 py-2 border-b"
          >
            <BsGithub />
            Github
          </a>
          <a
            href="https://x.com/ZathuraDbg"
            target="_blank"
            className="flex p-2 text-zinc-950 w-full items-center gap-2 py-2"
          >
            <FaXTwitter />
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
