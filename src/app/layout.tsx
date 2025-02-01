import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // استيراد الخط Roboto
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/sections/Header";
import Footer from "@/sections/Footer";
import FooterContent from "@/sections/FooterContent";

// تعريف الخط مع الوزن والمجموعات الفرعية
const roboto = Roboto({
  weight: ["400", "700"], // تحديد الأوزان المطلوبة
  subsets: ["latin", "cyrillic"], // تحديد اللغات المدعومة
});

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(roboto.className, "antialiased bg-[#ffffff]")}>
        <Header />
        {children}
      </body>
      <FooterContent />
      <Footer />
    </html>
  );
}
