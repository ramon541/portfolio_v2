"use client";

import * as React from "react";
import { memo } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = memo(function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
});
