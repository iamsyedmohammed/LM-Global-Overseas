import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/Schema";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "LM Global Overseas - Education & Immigration Consultant",
  description: "Your trusted education and immigration consultant. Expert guidance for Study, Work, and PR visas to Canada, UK, USA, Australia, and more.",
  keywords: "immigration consultant, study visa, work visa, PR visa, Canada immigration, UK visa, USA visa, Australia visa, education consultant",
  authors: [{ name: "LM Global Overseas" }],
  openGraph: {
    title: "LM Global Overseas - Education & Immigration Consultant",
    description: "Expert immigration guidance for students and professionals",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${outfit.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
