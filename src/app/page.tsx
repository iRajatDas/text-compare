"use client"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import ReactDiffViewer from "react-diff-viewer-continued";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

enum DiffMethod {
  CHARS = "diffChars",
  WORDS = "diffWords",
  WORDS_WITH_SPACE = "diffWordsWithSpace",
  LINES = "diffLines",
  TRIMMED_LINES = "diffTrimmedLines",
  SENTENCES = "diffSentences",
  CSS = "diffCss",
}



// Default variables and style keys

const defaultStyles = {
  variables: {
    light: {
      diffViewerBackground: '#fff',
      diffViewerColor: '#212529',
      addedBackground: '#ffffff00',
      addedColor: '#24292e',
      removedBackground: '#ffffff00',
      removedColor: '#24292e',
      wordAddedBackground: '#acf2bd',
      wordRemovedBackground: '#fdb8c0',
      addedGutterBackground: '#cdffd8',
      removedGutterBackground: '#ffdce0',
      gutterBackground: '#f7f7f7',
      gutterBackgroundDark: '#f3f1f1',
      highlightBackground: '#fffbdd',
      highlightGutterBackground: '#fff5b1',
      codeFoldGutterBackground: '#dbedff',
      codeFoldBackground: '#f1f8ff',
      emptyLineBackground: '#fafbfc',
      gutterColor: '#212529',
      addedGutterColor: '#212529',
      removedGutterColor: '#212529',
      codeFoldContentColor: '#212529',
      diffViewerTitleBackground: '#fafbfc',
      diffViewerTitleColor: '#212529',
      diffViewerTitleBorderColor: '#eee',
    },
    dark: {
      diffViewerBackground: '#2e303c',
      diffViewerColor: '#FFF',
      addedBackground: '#044B53',
      addedColor: 'white',
      removedBackground: '#632F34',
      removedColor: 'white',
      wordAddedBackground: '#055d67',
      wordRemovedBackground: '#7d383f',
      addedGutterBackground: '#034148',
      removedGutterBackground: '#632b30',
      gutterBackground: '#2c2f3a',
      gutterBackgroundDark: '#262933',
      highlightBackground: '#2a3967',
      highlightGutterBackground: '#2d4077',
      codeFoldGutterBackground: '#21232b',
      codeFoldBackground: '#262831',
      emptyLineBackground: '#363946',
      gutterColor: '#464c67',
      addedGutterColor: '#8c8c8c',
      removedGutterColor: '#8c8c8c',
      codeFoldContentColor: '#555a7b',
      diffViewerTitleBackground: '#2f323e',
      diffViewerTitleColor: '#555a7b',
      diffViewerTitleBorderColor: '#353846',
    }
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
}

const formSchema = z.object({
  original: z.string().optional(),
  comparitor: z.string().optional(),
});

type FormType = z.infer<typeof formSchema>;

export default function Home() {
  const [comparisonResult, setComparisonResult] = useState<JSX.Element | null>(
    null
  );
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      original: "",
      comparitor: "",
    },
  });

  const onSubmit = async (data: FormType) => {
    console.table(data);
    // Perform the text comparison
    const comparisonResult = compareTexts(
      isSwitched ? data.comparitor!! : data.original!!,
      isSwitched ? data.original!! : data.comparitor!!
    );
    // Update the ReactDiffViewer component with the comparison result
    // This will cause the component to re-render and display the comparison
    setComparisonResult(comparisonResult);
  };

  const compareTexts = (text1: string, text2: string) => {
    return (
      <ReactDiffViewer
        oldValue={text1}
        newValue={text2}
        compareMethod={DiffMethod.CHARS}
        splitView={true}
        hideLineNumbers
        showDiffOnly
        styles={defaultStyles}
      />
    );
  };

  const handleSwitchButtonClick = () => {
    setIsSwitched((prevSwitched) => !prevSwitched);
  };

  return (
    <main className="grid grid-cols-1 min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="b0 w-full min-h-full h-full">
        <div className="w-full border-2 py-3 px-3 rounded-xl">{comparisonResult}</div>
      </div>
      <div className="w-full min-h-full h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full min-h-full"
          >
            <div className="grid grid-cols-2 gap-8 h-full min-h-full">
              <FormField
                name={"original"}
                control={form.control}
                defaultValue={
                  isSwitched
                    ? form.getValues("comparitor")
                    : form.getValues("original")
                }
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={
                          isSwitched
                            ? "Enter comparitor text"
                            : "Enter original text"
                        }
                        className="h-full"
                        {...field}
                        value={
                          isSwitched
                            ? form.getValues("comparitor")
                            : form.getValues("original")
                        }
                        onChange={(e) => {
                          const value = e.target.value;
                          form.setValue(
                            isSwitched ? "comparitor" : "original",
                            value
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={"comparitor"}
                control={form.control}
                defaultValue={
                  isSwitched
                    ? form.getValues("original")
                    : form.getValues("comparitor")
                }
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={
                          isSwitched
                            ? "Enter original text"
                            : "Enter comparitor text"
                        }
                        className="h-full"
                        {...field}
                        value={
                          isSwitched
                            ? form.getValues("original")
                            : form.getValues("comparitor")
                        }
                        onChange={(e) => {
                          const value = e.target.value;
                          form.setValue(
                            isSwitched ? "original" : "comparitor",
                            value
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Compare</Button>
            <Button
              type="button"
              onClick={handleSwitchButtonClick}
              className="mt-4"
            >
              Switch
            </Button>
          </form>
        </Form>
      </div>
      <ColorPalette/>
    </main>
  );
}







// 

const ColorSwatch = ({ color, code }) => {
  return (
    <div
      style={{
        backgroundColor: code,
        width: "200px",
        height: "200px",
        margin: "10px",
        border: "1px solid #000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          color: "#fff",
        }}
      >
        {color}
      </div>
    </div>
  );
};

const ColorPalette = () => {
  return (
    <div className="grid grid-col-3 py-10">
      <ColorSwatch color="diffViewerBackground" code="#ffffff" />
      <ColorSwatch color="diffViewerColor" code="#212529" />
      <ColorSwatch color="addedBackground" code="#e6ffed" />
      <ColorSwatch color="addedColor" code="#24292e" />
      <ColorSwatch color="removedBackground" code="#ffeef0" />
      <ColorSwatch color="removedColor" code="#24292e" />
      <ColorSwatch color="wordAddedBackground" code="#acf2bd" />
      <ColorSwatch color="wordRemovedBackground" code="#fdb8c0" />
      <ColorSwatch color="addedGutterBackground" code="#cdffd8" />
      <ColorSwatch color="removedGutterBackground" code="#ffdce0" />
      <ColorSwatch color="gutterBackground" code="#f7f7f7" />
      <ColorSwatch color="gutterBackgroundDark" code="#f3f1f1" />
      <ColorSwatch color="highlightBackground" code="#fffbdd" />
      <ColorSwatch color="highlightGutterBackground" code="#fff5b1" />
      <ColorSwatch color="codeFoldGutterBackground" code="#dbedff" />
      <ColorSwatch color="codeFoldBackground" code="#f1f8ff" />
      <ColorSwatch color="emptyLineBackground" code="#fafbfc" />
      <ColorSwatch color="gutterColor" code="#212529" />
      <ColorSwatch color="addedGutterColor" code="#212529" />
      <ColorSwatch color="removedGutterColor" code="#212529" />
      <ColorSwatch color="codeFoldContentColor" code="#212529" />
      <ColorSwatch color="diffViewerTitleBackground" code="#fafbfc" />
      <ColorSwatch color="diffViewerTitleColor" code="#212529" />
      <ColorSwatch color="diffViewerTitleBorderColor" code="#eee" />
    </div>
  );
};