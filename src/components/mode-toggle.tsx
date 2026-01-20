"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

//= ==============================================================================================
export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="border cursor-pointer size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
      onClick={() => setTheme(theme && theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
