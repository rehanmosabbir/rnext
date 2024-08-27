import { Inter } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/CustomLink";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul className=" flex gap-5 bg-black text-white p-5">
          <li>
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink prefetch={false} path="/analytics">
              Analytics
            </CustomLink>
          </li>
          <li>
            <CustomLink path="/settings">Settings</CustomLink>
          </li>
          <li>
            <CustomLink prefetch={false} path="/heavy">
              Heavy
            </CustomLink>
          </li>
          <li>
            <CustomLink path="/blogs">Blogs</CustomLink>
          </li>
        </ul>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
