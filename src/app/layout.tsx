import { LayoutWithHeader } from "@/components/layout/layout-with-header";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";

import { Exo_2 } from "next/font/google";
import Script from "next/script";

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Ramon Dias | Portfólio de Desenvolvedor Mobile",
  description:
    "Explore o portfólio de Ramon Dias — Desenvolvedor Mobile especializado em React Native, Expo, TypeScript e tecnologias modernas para aplicações mobile.",
  keywords: [
    "Desenvolvedor Mobile",
    "Desenvolvedor Android",
    "Desenvolvedor iOS",
    "React Native",
    "Expo",
    "TypeScript",
    "Portfólio Ramon Dias",
    "Desenvolvimento Mobile",
    "Tecnologias Mobile Modernas",
  ],
  openGraph: {
    title: "Ramon Dias | Portfólio de Desenvolvedor Mobile",
    description:
      "Conheça a experiência de Ramon Dias em desenvolvimento mobile com React Native e Expo. Veja projetos, estudos de caso e habilidades técnicas.",
    url: "https://ramondias.dev.br",
    type: "website",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Ramon Dias - Portfólio de Desenvolvedor Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramon Dias | Portfólio de Desenvolvedor Mobile",
    description:
      "Explore projetos mobile e a experiência de Ramon Dias com React Native, Expo e desenvolvimento mobile moderno.",
    images: ["/images/banner.png"],
  },
  icons: {
    icon: "/logo_wt.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T3H76DY1F3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T3H76DY1F3');
          `}
        </Script>
      </head>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
      </body>
    </html>
  );
}
