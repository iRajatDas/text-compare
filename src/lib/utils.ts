import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locale } from "../../i18n.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const defaultStyles = {
  variables: {
    light: {
      diffViewerBackground: "#fff",
      diffViewerColor: "#212529",
      addedBackground: "#ffffff00",
      addedColor: "#24292e",
      removedBackground: "#ffffff00",
      removedColor: "#24292e",
      wordAddedBackground: "#acf2bd",
      wordRemovedBackground: "#fdb8c0",
      addedGutterBackground: "#cdffd8",
      removedGutterBackground: "#ffdce0",
      gutterBackground: "#f7f7f7",
      gutterBackgroundDark: "#f3f1f1",
      highlightBackground: "#fffbdd",
      highlightGutterBackground: "#fff5b1",
      codeFoldGutterBackground: "#dbedff",
      codeFoldBackground: "#f1f8ff",
      emptyLineBackground: "#fafbfc",
      gutterColor: "#212529",
      addedGutterColor: "#212529",
      removedGutterColor: "#212529",
      codeFoldContentColor: "#212529",
      diffViewerTitleBackground: "#fafbfc",
      diffViewerTitleColor: "#212529",
      diffViewerTitleBorderColor: "#eee",
    },
    dark: {
      diffViewerBackground: "#2e303c",
      diffViewerColor: "#FFF",
      addedBackground: "#044B53",
      addedColor: "white",
      removedBackground: "#632F34",
      removedColor: "white",
      wordAddedBackground: "#055d67",
      wordRemovedBackground: "#7d383f",
      addedGutterBackground: "#034148",
      removedGutterBackground: "#632b30",
      gutterBackground: "#2c2f3a",
      gutterBackgroundDark: "#262933",
      highlightBackground: "#2a3967",
      highlightGutterBackground: "#2d4077",
      codeFoldGutterBackground: "#21232b",
      codeFoldBackground: "#262831",
      emptyLineBackground: "#363946",
      gutterColor: "#464c67",
      addedGutterColor: "#8c8c8c",
      removedGutterColor: "#8c8c8c",
      codeFoldContentColor: "#555a7b",
      diffViewerTitleBackground: "#2f323e",
      diffViewerTitleColor: "#555a7b",
      diffViewerTitleBorderColor: "#353846",
    },
  },
  // diffContainer?: {}, // style object
  // diffRemoved?: {}, // style object
  // diffAdded?: {}, // style object
  // marker?: {}, // style object
  // emptyGutter?: {}, // style object
  // highlightedLine?: {}, // style object
  // lineNumber?: {}, // style object
  // highlightedGutter?: {}, // style object
  // contentText?: {}, // style object
  // gutter?: {}, // style object
  // line?: {}, // style object
  // wordDiff?: {}, // style object
  // wordAdded?: {}, // style object
  // wordRemoved?: {}, // style object
  // codeFoldGutter?: {}, // style object
  // codeFold?: {}, // style object
  // emptyLine?: {}, // style object
  // content?: {}, // style object
  // titleBlock?: {}, // style object
  // splitView?: {}, // style object
};

export type TypeLang = { params: { lang: Locale } };

// Helper function to perform the "To lowercase" operation
export const toLowerCase = (text: string): string => {
  return text.toLowerCase();
};

// Helper function to perform the "Sort lines" operation
export const sortLines = (text: string): string => {
  const lines = text.split("\n");
  lines.sort();
  return lines.join("\n");
};

// Helper function to perform the "Replace line breaks with spaces" operation
export const replaceLineBreaks = (text: string): string => {
  return text.replace(/\n/g, " ");
};

// Helper function to perform the "Remove excess white space" operation
export const removeExcessWhiteSpace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};
