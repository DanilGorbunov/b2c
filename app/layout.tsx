import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danil Gorbunov - Product Designer",
  description:
    "Portfolio of Danil Gorbunov, a product designer with 12 years of experience in UX/UI design and frontend development.",
  generator: "site_portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <div className="relative flex min-h-screen flex-col bg-[#0A0A0A]">
            {/* <a href="#main-content" className="skip-link">
              Skip to main content
            </a> */}
            <SiteHeader />
            <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
