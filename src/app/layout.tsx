import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

const Font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitZone",
  description: "FitZone project website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${Font.className} bg-black text-white`}>
          <Navbar />
          <Toaster position="top-right" />

          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
