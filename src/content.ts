import { Locale } from "../i18n.config";

// Define interfaces for metaData and content
interface MetaData {
  title: string;
  desc: string;
}

interface Content {
  heading: string;
}

// Define DictionaryEntry using the specific interfaces
interface DictionaryEntry {
  metaData: MetaData;
  content: Content;
}

// Create the dictionary using the specific DictionaryEntry interface
export const dictionary: Record<Locale, DictionaryEntry> = {
  en: {
    metaData: {
      title: "English Title",
      desc: "Description for English",
    },
    content: {
      heading: "en",
    },
  },
  hi: {
    metaData: {
      title: "हिंदी शीर्षक", // Hindi Title
      desc: "हिंदी के लिए विवरण", // Description for Hindi
    },
    content: {
      heading: "Hi",
    },
  },
};
