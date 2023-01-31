import theme from "../../theme";
import { useColorMode } from "@chakra-ui/color-mode";
import NavBar from "../NavBar/NavBar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <div
      style={{
        backgroundColor:
          colorMode === "light"
            ? theme.config.colors.white
            : theme.config.colors.black,
        minHeight: "100vh",
      }}
    >
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
