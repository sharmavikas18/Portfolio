import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://vikas-sharma-portfolio.vercel.app"),
  title: {
    default: "Vikas Sharma — Software Developer & Full-Stack Engineer",
    template: "%s | Vikas Sharma",
  },
  description:
    "Official portfolio of Vikas Sharma — Software Developer, Open-Source Contributor, and Vice President of DevForge. Building intelligent systems, creative tools, and impactful software.",
  keywords: [
    "Vikas Sharma",
    "Vikas Sharma Developer",
    "Vikas Sharma Portfolio",
    "Software Developer",
    "Full-Stack Developer",
    "Newton School of Technology",
    "DevForge",
    "Open Source Contributor",
    "RAASTA",
    "7th Hour",
    "Bangalore Software Engineer",
  ],
  authors: [{ name: "Vikas Sharma", url: "https://vikas-sharma-portfolio.vercel.app" }],
  creator: "Vikas Sharma",
  publisher: "Vikas Sharma",
  alternates: {
    canonical: "https://vikas-sharma-portfolio.vercel.app/",
  },
  openGraph: {
    type: "profile",
    firstName: "Vikas",
    lastName: "Sharma",
    username: "sharmavikas18",
    title: "Vikas Sharma — Software Developer & Full-Stack Engineer",
    description:
      "Official portfolio of Vikas Sharma — Software Developer, Open-Source Contributor, and VP of DevForge. Building intelligent systems, creative tools, and impactful software.",
    url: "https://vikas-sharma-portfolio.vercel.app/",
    siteName: "Vikas Sharma Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 1000,
        alt: "Vikas Sharma — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Sharma — Software Developer & Full-Stack Engineer",
    description:
      "Official portfolio of Vikas Sharma — Software Developer, Open-Source Contributor, and VP of DevForge. Building intelligent systems, creative tools, and impactful software.",
    images: ["/profile.png"],
    creator: "@sharmavikas18",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://vikas-sharma-portfolio.vercel.app/#person",
      "name": "Vikas Sharma",
      "givenName": "Vikas",
      "familyName": "Sharma",
      "url": "https://vikas-sharma-portfolio.vercel.app/",
      "image": "https://vikas-sharma-portfolio.vercel.app/profile.png",
      "jobTitle": "Software Developer",
      "description":
        "Software Developer and B.Tech Computer Science student at Newton School of Technology, Bangalore. Open-source contributor and Vice President of DevForge.",
      "sameAs": [
        "https://github.com/sharmavikas18",
        "https://www.linkedin.com/in/sharmavikas18/"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Newton School of Technology",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressCountry": "IN"
        }
      },
      "knowsAbout": [
        "Software Engineering",
        "Full-Stack Web Development",
        "Open Source Software",
        "TypeScript",
        "JavaScript",
        "Python",
        "React",
        "Next.js",
        "Node.js",
        "FastAPI",
        "PostgreSQL",
        "REST APIs",
        "Distributed Systems"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://vikas-sharma-portfolio.vercel.app/#website",
      "url": "https://vikas-sharma-portfolio.vercel.app/",
      "name": "Vikas Sharma Portfolio",
      "description": "Personal website and developer portfolio of Vikas Sharma.",
      "publisher": {
        "@id": "https://vikas-sharma-portfolio.vercel.app/#person"
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans bg-[#050507] text-[#e2e8f0] selection:bg-[#5eead4]/20 selection:text-[#5eead4] min-h-screen overflow-x-hidden antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
