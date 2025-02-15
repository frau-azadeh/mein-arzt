import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import HeaderComponent from "@/components/header/HeaderComponent";
import "@/styles/typography.css";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "کلینیک فوق تخصصی دیابلند",
  description:
    "کلینیک فوق تخصصی دیابلند همراه با پزشکان مجرب آماده پاسخگویی به هموطنان می باشند",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
