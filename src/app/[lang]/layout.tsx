import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const siteURL = "https://example.com";

  return {
    title: `Your title`,
    description: `Your meta description`,
    alternates: {
      canonical: `${siteURL}/${lang}`,
    },
    openGraph: {
      title: "",
      description: "post.summary",
      images: [
        // post.coverImage
        //   ? `/images/posts/${post.slug}/${post.coverImage}`
        //   : "/images/seo-image.png",
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang ?? "en"}>
      <head></head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-full">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
