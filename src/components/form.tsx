"use client";
import React from "react";
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
import { LuLoader } from "react-icons/lu";

const formSchema = z.object({
  original: z.string().optional(),
  comparitor: z.string().optional(),
});

type FormType = z.infer<typeof formSchema>;

const FormLayout = () => {
  const [comparisonResult, setComparisonResult] = useState<JSX.Element | null>(
    null
  );
  const [isSwitched, setIsSwitched] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      original: `The advancements in technology have revolutionized the way we communicate and access information. From the invention of the internet to the development of smartphones, our lives have become more interconnected and convenient. With just a few taps on a screen, we can connect with people from around the world, access a vast amount of knowledge, and stay updated with the latest news and trends.

However, along with the benefits, technology also brings challenges. The abundance of information can lead to information overload and make it difficult to distinguish between reliable sources and misinformation. Moreover, the constant connectivity can take a toll on our mental well-being, as we find ourselves constantly checking notifications and being bombarded with information.

Despite these challenges, technology continues to evolve and shape our lives. Artificial intelligence and machine learning are becoming increasingly prevalent, transforming industries such as healthcare, finance, and transportation. We now have smart homes equipped with voice assistants and connected devices that make our lives more convenient.

In the future, we can expect even more advancements, such as the widespread adoption of virtual reality and augmented reality technologies. These innovations will further blur the lines between the physical and digital worlds, creating immersive experiences and new possibilities.`,
      comparitor: `The progressions in technology have transformed the manner in which we communicate and obtain information. From the inception of the internet to the advancement of smartphones, our lives have become more interconnected and efficient. With just a few taps on a screen, we can establish connections with individuals from across the globe, retrieve a vast amount of knowledge, and remain up-to-date with the latest news and trends.

Nevertheless, alongside the advantages, technology also presents challenges. The profusion of information can result in an overload of data, making it arduous to differentiate between credible sources and misinformation. Furthermore, the constant connectivity can have a detrimental impact on our mental well-being, as we find ourselves continuously checking notifications and being inundated with information.

Notwithstanding these challenges, technology persists in evolving and molding our lives. Artificial intelligence and machine learning are progressively gaining prevalence, revolutionizing sectors such as healthcare, finance, and transportation. We now have intelligent residences equipped with voice-activated assistants and interconnected devices that enhance the convenience of our lives.

In the times ahead, we can anticipate further advancements, including the extensive adoption of virtual reality and augmented reality technologies. These innovations will further blur the boundaries between the physical and digital realms, engendering immersive experiences and fresh possibilities.`,
    },
  });

  const onSubmit = async (data: FormType) => {
    console.table(data);

    const { original, comparitor } = data;

    // Check if both fields are empty
    if (!original && !comparitor) {
      setError("Please enter text in at least one field.");
      return;
    }

    // Check if both fields have the same value
    if (original === comparitor) {
      setError("Both fields have the same value. Please enter different text.");
      return;
    }

    setError(null); // Clear any previous error messages

    await delay(3000);

    // Perform the text comparison
    const comparisonResult = compareTexts(
      isSwitched ? comparitor!! : original!!,
      isSwitched ? original!! : comparitor!!
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

  const clearAll = () => {
    setIsSwitched(false);
    setComparisonResult(null);
    setError(null);
    form.reset({
      original: "",
      comparitor: "",
    });
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-6 md:py-10 px-4 bg-stone-50 border-y font-mono leading-tight tracking-tight text-sm"
        >
          {comparisonResult && (
            <div className="w-full pb-6">
              <div className="w-full border-2 py-3 px-3 rounded-xl bg-white">
                {comparisonResult}
              </div>
            </div>
          )}
          {error && (
            <div className="w-full pb-6">
              <div className="w-full border-2 py-3 px-3 rounded-xl bg-green-200">
                {error}
              </div>
            </div>
          )}

          <div className="w-full grid md:grid-cols-2 grid-cols-1 pb-6 font-sans">
            <div className=""></div>
            <div className=" grid place-items-end">
              <Button
                type="button"
                onClick={clearAll}
                size={"lg"}
                variant={"outline"}
                disabled={form.formState.isSubmitting}
              >
                Clear All
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full min-h-full ">
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
                      rows={12}
                      placeholder={
                        isSwitched
                          ? "Enter comparitor text"
                          : "Enter original text"
                      }
                      className="h-full resize-none bg-white"
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
                      className="h-full resize-none bg-white"
                      {...field}
                      rows={12}
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
          <div className="grid place-items-center mx-auto pt-8 font-sans space-y-4">
            <Button
              type="submit"
              className="mx-auto bg-green-500 hover:bg-green-600 text-green-50 text text-lg md:text-xl font-normal py-6"
              size={"lg"}
              disabled={form.formState.isSubmitting}
            >
              Compare!
              {form.formState.isSubmitting && (
                <LuLoader className="w-5 h-5 animate-spin duration-1000 ml-2" />
              )}
            </Button>
            <Button
              type="button"
              onClick={handleSwitchButtonClick}
              size={"lg"}
              variant={"outline"}
              className="text-lg md:text-xl py-6"
              disabled={form.formState.isSubmitting}
            >
              Switch
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default FormLayout;
