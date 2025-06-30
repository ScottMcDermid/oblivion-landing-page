'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BookIcon from '@mui/icons-material/Book';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import theme from '@/app/theme';

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="flex min-h-screen items-center justify-center px-4">
          <Container maxWidth="md" className="space-y-8 text-center">
            <div className="text-accent text-4xl font-bold">Oblivion Tool Suite</div>

            <div className="text-ghost">
              A collection of tools to enhance your Elder Scrolls IV: Oblivion experience.
            </div>

            <Box className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="https://plan.oblivion.tools"
                className="rounded-xl px-6 py-3"
              >
                <BookIcon /> Level Planner
              </Button>

              <Button
                variant="contained"
                color="primary"
                size="large"
                href="https://spells.oblivion.tools"
                className="rounded-xl px-6 py-3"
              >
                <FlashOnIcon /> Spell Altar
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="https://enchanting.oblivion.tools"
                className="rounded-xl px-6 py-3"
              >
                <AddModeratorIcon /> Enchanting
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
