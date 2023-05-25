"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../libs/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
