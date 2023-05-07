import "./globals.css";
import { Inter } from "next/font/google";
import "@arco-design/web-react/dist/css/arco.css";
import React from "react";
import Layout from "./Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "清云工作室",
  description: "清云工作室",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
