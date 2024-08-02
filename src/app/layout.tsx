import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wacari",
  description: "Wacari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      </head>
      <body className={inter.className} style={{margin: 0}}>
          <AntdRegistry>
              <AppRouterCacheProvider>
                  {children}
              </AppRouterCacheProvider>
          </AntdRegistry>
          <Footer/>
      </body>
    </html>
  );
}
