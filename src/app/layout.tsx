import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@vscode/codicons/dist/codicon.css';
import "@/app/globals.css";
import { TabProvider } from "@/app/contexts/TabContext";
import VSCodeLayout from "@/app/components/VSCodeLayout/VSCodeLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangheon Lee",
  description: "Welcome to my world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TabProvider>
          <VSCodeLayout>
            {children}
          </VSCodeLayout>
        </TabProvider>
      </body>
    </html>
  );
}
