import React from "react";
import { dictionary } from "@/content";
import { TypeLang } from "@/lib/utils";
import FormLayout from "@/components/form";

const Home = async ({ params: { lang } }: TypeLang) => {
  const t = dictionary[lang];
  return (
    <div className="">
      <div className="py-12 px-4 space-y-6">
        <div className="border h-48 grid place-items-center max-w-7xl mx-auto">
          Ad Placeholder
        </div>
        <div className="">
          {/* {t.metaData.title} */}
          <FormLayout />
        </div>
      </div>
    </div>
  );
};

export default Home;
