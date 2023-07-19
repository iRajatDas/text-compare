"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { i18n } from "../../i18n.config";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const { lang } = useParams();
  const router = useRouter();
  console.log(lang);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const onChange = (selectedLocale: string) => {
    router.replace(redirectedPathName(selectedLocale));
  };

  return (
    <Select onValueChange={onChange} value={lang as string}>
      <SelectTrigger className="w-[120px] bg-white">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {i18n.locales.map((localeItem) => {
            return (
              <SelectItem value={localeItem} key={localeItem}>
                {localeItem}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
