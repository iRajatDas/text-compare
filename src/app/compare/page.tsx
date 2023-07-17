import FormLayout from "@/components/form";
import Link from "next/link";
import React from "react";

const ComparePage = () => {
  return (
    <div>
      <div className="logo flex items-center justify-center bg-gradient-to-r from-green-600 to-green-400">
        <div className="logo_background text-slate-50 h-full w-full bg-[url('/tiny_grid-transparent.png')] py-3 md:py-6 flex justify-center items-center">
          <Link
            id="logo"
            href="/"
            className="text-3xl md:text-3xl lg:text-4xl tracking-wide font-bold mt-2"
          >
            Text Compare!
          </Link>
        </div>
      </div>
      <FormLayout />
    </div>
  );
};

export default ComparePage;
