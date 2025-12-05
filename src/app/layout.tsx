import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
