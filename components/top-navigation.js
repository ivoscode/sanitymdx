import Link from "next/link";
import React, { useState } from "react";

export default function TopNavigation() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className=" header-bg z-50 w-full  ">
      <div className="flex flex-wrap items-center justify-between  p-4 mx-auto md:p-8">
        <Link href="/">
          <a>
            <h1 className=" ml-3 text-black no-underline">
              <span className="text-xl font-bold tracking-tight">My blog</span>
            </h1>
          </a>
        </Link>

        <button
          className="items-center bg-white block px-3 py-2 text-black border border-black rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/blog`,
              title: `Blog`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block ml-20 mt-4 text-black no-underline  md:inline-block md:mt-0 md:mr-15 text-xl"
              key={link.title}
              href={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
