import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const theme = useTheme();

  return (
    <Tooltip title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: 'white',
          transition: theme.transitions.create(['transform', 'color'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;