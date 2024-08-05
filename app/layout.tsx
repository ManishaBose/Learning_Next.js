//it creates a layout for all the pages in the project
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; //import styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  //metadata of the page
  title: "Manisha Bose", //title of the page
  description: "Created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 border-b">Manisha</div>
        {children}
      </body>
    </html>
  );
}

//inter.className adds font globally
//and wraps all the children with font
