import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/themeProvider";

const fontFira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Home",
    template: "%s | HeriKaban.",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(fontFira.variable, "min-h-screen antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
