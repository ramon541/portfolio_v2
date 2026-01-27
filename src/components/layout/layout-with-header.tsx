import React, { memo } from "react";
import { Header } from "./header";
import { HeroBackground } from "./hero-background";

const CURRENT_YEAR = new Date().getFullYear();

export const LayoutWithHeader = memo(function LayoutWithHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-[family-name:var(--font-exo2)] font-medium w-screen">
      <HeroBackground>
        <Header />

        <main className="overflow-auto overflow-x-hidden container mx-auto flex-1 p-4">
          {children}
        </main>
        <footer className="text-sm md:text-lg row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600 p-4">
          © {CURRENT_YEAR}, Ramon Dias. Todos os direitos reservados.
        </footer>
      </HeroBackground>
    </div>
  );
});
