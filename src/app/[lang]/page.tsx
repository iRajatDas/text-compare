import React from "react";
import { dictionary } from "@/content";
import { TypeLang } from "@/lib/utils";
import FormLayout from "@/components/form";
import Features from "@/components/features";
import About from "@/components/about";
import Faqs from "@/components/faqs";

const Home = async ({ params: { lang } }: TypeLang) => {
  const t = dictionary[lang];
  return (
    <div className="">
      <div className="py-12 px-4 space-y-6 bg-stone-100">
        <div className="border h-48 grid place-items-center max-w-7xl mx-auto bg-white">
          Ad Placeholder
        </div>
        <div className="">
          {/* {t.metaData.title} */}
          <FormLayout />
          <Features />
          <About />
          <Faqs/>
        </div>
      </div>
    </div>
  );
};

export default Home;
