import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#fff",
        margin: "auto",
        maxWidth: "800px",
        color: "#333",
      },
    },
  },
});
