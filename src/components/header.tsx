"use client";

import React from "react";
import { Button } from "./ui/button";
import LocaleSwitcher from "./locale-switcher";

const Header = () => {
  return (
    <header className="shrink-0">
      <nav className="px-4">
        <div className="hidden grid-cols-2 py-4 bg-stone-50 md:grid">
          <div className="space-x-4 flex items-stretch">
            <div className="w-40 h-14 bg-green-300 shrink-0 mr-5"></div>
            <div className="flex-1 h-full min-h-full">
              <ul className="flex items-center gap-5 h-full">
                <li className="bg-green-100 h-full flex items-center justify-center px-10 rounded-lg border-b-4 border-green-500 text-green-700 font-medium">
                  Item 1
                </li>
                <li className="bg-fuchsia-100 h-full flex items-center justify-center px-10 rounded-lg border-b-4 border-fuchsia-500 text-fuchsia-700 font-medium">
                  Item 2
                </li>
                <li className="bg-red-100 h-full flex items-center justify-center px-10 rounded-lg border-b-4 border-red-500 text-red-700 font-medium">
                  Item 3
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="space-x-5 flex items-center">
              <Button variant={"secondary"} size={"lg"} className="text-base">
                Blog
              </Button>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
