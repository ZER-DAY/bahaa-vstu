import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google"; // استيراد الخطوط
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/sections/Header";
import Footer from "@/sections/Footer";
import FooterContent from "@/sections/FooterContent";

// تعريف خط Roboto
const roboto = Roboto({
  weight: ["400", "700"], // تحديد الأوزان المطلوبة
  subsets: ["latin", "cyrillic"], // تحديد اللغات المدعومة
});

// تعريف خط Merriweather
const merriweather = Merriweather({
  weight: ["400", "700"], // تحديد الأوزان المطلوبة
  subsets: ["latin"], // تحديد اللغات المدعومة
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
      <body
        className={clsx(
          roboto.className, // استخدام خط Roboto كخط أساسي
          "antialiased bg-[#ffffff]"
        )}
      >
        <Header />
        <div className={merriweather.className}>
          {/* محتوى الصفحة يستخدم خط Merriweather */}
          {children}
        </div>
      </body>
      <FooterContent />
      <Footer />
    </html>
  );
}
