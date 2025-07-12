import React, { FC } from "react";
import { Box, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { FooterLogo } from "../logo/FooterLogo";
import { useThemeMode } from "../../contexts/ThemeContext";

const Footer: FC = () => {
  const { breakpoints } = useTheme();
  const { isDarkMode } = useThemeMode();
  
  return (
    <Box
      component="footer"
      sx={{ 
        background: isDarkMode 
          ? "linear-gradient(to bottom, #1a1a2e, #16213e)" 
          : "linear-gradient(to bottom, #173039, #00b4c9)",
        transition: 'background 0.3s ease',
      }}
    >
      <Container sx={{ [breakpoints.up("sm")]: { maxWidth: "1400px" } }}>
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <FooterLogo />
          <Box
            sx={{
              width: "324px",
              height: "45px",
              borderRadius: "6px",
              backgroundColor: "#fff",
              color: "#00c1c9",
              fontSize: "30px",
              lineHeight: "6px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            HELP
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;