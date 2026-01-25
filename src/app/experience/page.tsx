import { FullScreen } from "@/components/full-screen";
import { ExperienceTimeline } from "./containers/experience-timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência | Ramon Dias - Desenvolvedor Mobile",
  description:
    "Explore a jornada profissional de Ramon Dias no desenvolvimento mobile com React Native e Expo. Conheça projetos e experiências técnicas ao longo da carreira.",
  keywords: [
    "Desenvolvedor Mobile",
    "React Native",
    "Expo",
    "Experiência Profissional",
    "Desenvolvedor Android",
    "Desenvolvedor iOS",
    "Carreira Mobile",
  ],
  openGraph: {
    title: "Experiência | Ramon Dias - Desenvolvedor Mobile",
    description:
      "Conheça a trajetória profissional de Ramon Dias em desenvolvimento mobile com React Native e Expo.",
    url: "https://ramondias.dev.br/experience",
    type: "website",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Ramon Dias - Experiência Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiência | Ramon Dias - Desenvolvedor Mobile",
    description:
      "Veja a experiência profissional de Ramon Dias com React Native, Expo e desenvolvimento mobile.",
    images: ["/images/banner.png"],
  },
};

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  );
}
