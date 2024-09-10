import type { Metadata } from "next";
import '@vscode/codicons/dist/codicon.css';
import { Inter } from "next/font/google";
import { TabProvider } from "@/app/contexts/TabContext";
import VSCodeLayout from "@/app/components/VSCodeLayout/VSCodeLayout";
import StyledComponentsRegistry from "@/lib/registry";

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
      <head>
        <link
          rel="stylesheet"
          href="/styles.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <TabProvider>
            <VSCodeLayout>
              {children}
            </VSCodeLayout>
          </TabProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
