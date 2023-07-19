import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="bg-stone-100 py-12">
      <div className="space-y-4 bg-white border shadow-xl">
        <div className="flex p-4 items-stretch space-x-6 space-y-6 flex-col md:flex-row">
          <div className="min-h-full shrink-0 grid place-items-center">
            <div className="h-96 w-72 bg-green-300 shrink-0"></div>
          </div>
          <div className="flex-1 min-h-full space-y-4">
            <h2 className="font-bold tracking-tight text-2xl md:text-3xl">
              Compare text Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis, voluptates? Quod tempora repudiandae obcaecati quasi
              illo. Molestiae, amet eaque aut incidunt eius dolores culpa?
              Corrupti laudantium modi, obcaecati ex ipsa laborum delectus alias
              nihil possimus facilis dolore sed rerum aliquid.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus voluptas asperiores accusantium quisquam.
            </p>
            <ul className="space-y- ml-8 list-disc">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
            <p>
              <strong>Links</strong>:
            </p>
            <div className="">
              <p>
                <Link href="#">https://twitter.com</Link>
              </p>
              <p>
                <Link href="#">https://www.google.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
