import React from "react";
import { dictionary } from "@/content";
import { TypeLang } from "@/lib/utils";

const Home = ({ params: { lang } }: TypeLang) => {
  const t = dictionary[lang];
  return <div>{t.metaData.title}</div>;
};

export default Home;
