"use client";

import { Pointer } from "@/components/magicui/pointer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { cn } from "@/lib/utils";
import { IconClipboardCopy } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { StackCloud } from "./stack-cloud";
import { Blocks } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

//= ==============================================================================================
export function PersonalInterests() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[352px] rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }
  return (
    <>
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}

//= ==============================================================================================
const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <EvervaultCard
        text={
          <a
            href="/files/ramondias_curriculo.pdf"
            download
            className="flex flex-col items-center justify-center"
            onClick={() =>
              sendGAEvent("event", "download_curriculo", {
                file_name: "ramondias_curriculo.pdf",
                page_location: window.location.href,
              })
            }
          >
            Currículo
            <div className="text-sm text-gray-500">(Clique para baixar)</div>
          </a>
        }
      />

      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-600"
          >
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </Pointer>
    </motion.div>
  );
};

//= ==============================================================================================
const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 "
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <StackCloud />
        <Pointer>
          <div className="text-2xl">👆</div>
        </Pointer>
      </div>
    </motion.div>
  );
};

//= ==============================================================================================
const items = [
  {
    title: "Sobre mim",
    description: (
      <span className="text-sm">
        Um resumo da minha experiência e habilidades — disponível para download.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech Stack",
    description: (
      <span className="text-sm">
        Tecnologias e ferramentas que utilizo no dia a dia para desenvolver
        aplicações mobile modernas e performáticas.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Blocks className="h-4 w-4 text-neutral-500" />,
  },
];
