import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="shrink-0 bg-green-50 text-gray-700">
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 space-y-8 md:gap-8">
          <div className="space-y-4">
            <div className="w-36 bg-green-300 h-16"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore aut cupiditate quod officiis est.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">Privacy</p>
            <ul className="space-y-2">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">React Out</p>
            <ul className="space-y-2">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">Our Product</p>
            <ul className="space-y-2">
              <li>
                <Link href="#">How it works</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-center bg-green-500 font-medium text-white md:text-lg">2023 &copy; All Rights Reserved - DiffApp</div>
    </footer>
  );
};

export default Footer;
