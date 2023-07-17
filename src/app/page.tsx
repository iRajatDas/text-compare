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
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { defaultStyles, delay } from "@/lib/utils";

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
    await delay(3000)
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
    </main>
  );
}