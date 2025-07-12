import React from "react";
import { Typography, useTheme } from "@mui/material";
import { useThemeMode } from "../../contexts/ThemeContext";

interface Props {
  children: React.ReactNode;
}

const Text2 = ({ children }: Props) => {
  const { isDarkMode } = useThemeMode();
  const theme = useTheme();

  return (
    <Typography
      sx={{
        fontSize: "19px",
        lineHeight: "48px",
        color: isDarkMode ? theme.palette.text.primary : "#173039",
        fontWeight: 400,
        transition: theme.transitions.create(['color'], {
          duration: theme.transitions.duration.short,
        }),
      }}
    >
      {children}
    </Typography>
  );
};

export default Text2;
