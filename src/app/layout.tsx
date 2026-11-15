import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Vikas Sharma — Full-Stack Developer & Creative Technologist",
  description: "Portfolio of Vikas Sharma — Full-Stack Developer, Open-Source Contributor, and VP of DevForge. Building intelligent systems, creative tools, and impactful software.",
  keywords: ["Vikas Sharma", "Developer Portfolio", "Full Stack", "Open Source", "NST", "DevForge", "RAASTA", "7th Hour"],
  authors: [{ name: "Vikas Sharma", url: "https://github.com/sharmavikas18" }],
  openGraph: {
    title: "Vikas Sharma — Developer Portfolio",
    description: "Full-Stack Developer, Open-Source Contributor, and VP of DevForge.",
    type: "website",
    url: "https://vikas-sharma-portfolio.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" className="dark scroll-smooth">
          <body className="font-sans bg-[#050507] text-[#e2e8f0] selection:bg-[#5eead4]/20 selection:text-[#5eead4] min-h-screen overflow-x-hidden antialiased">
            <CustomCursor />
            {children}
          </body>
        </html>
        );
}
