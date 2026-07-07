import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Danish Khan | Full-Stack Developer & DevOps Engineer",
  description: "Portfolio of Danish Khan, a Full-Stack MERN Developer and DevOps Engineer specializing in Next.js, React, Node.js, and CI/CD pipelines.",
  keywords: "Danish Khan, Web Developer, Full-Stack Developer, MERN Stack Developer, DevOps Engineer, Next.js Developer, React Developer, Mumbai, India, Portfolio",
  authors: [{ name: "Danish Khan" }],
  creator: "Danish Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danishkhan.vercel.app", // Placeholder, dynamically overridable
    title: "Danish Khan | Full-Stack Developer & DevOps Engineer",
    description: "Explore Danish Khan's projects, skills, and experience in building robust, modern web apps and deployment pipelines.",
    siteName: "Danish Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Khan | Full-Stack Developer & DevOps Engineer",
    description: "Explore Danish Khan's projects, skills, and experience in building robust, modern web apps and deployment pipelines.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-gray-100 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

