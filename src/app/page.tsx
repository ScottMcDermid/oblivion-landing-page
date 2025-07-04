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
import ScienceIcon from '@mui/icons-material/Science';
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
              <Button
                variant="outlined"
                color="primary"
                size="large"
                disabled
                className="cursor-not-allowed rounded-xl px-6 py-3 opacity-70"
              >
                <ScienceIcon /> Alchemy
              </Button>
            </Box>
          </Container>
        </Box>
        <footer className="mt-16 w-full border-t border-gray-700 bg-neutral-900 px-6 py-8 text-sm text-gray-400">
          <div className="mx-auto max-w-4xl space-y-2 text-center">
            <p>Oblivion Tool Suite © 2025 Scott McDermid</p>
            <p>
              Licensed under the{' '}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                className="underline hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GNU General Public License v3.0
              </a>
              .
            </p>
            <p>
              The Elder Scrolls and Oblivion are trademarks of Bethesda Softworks LLC, a ZeniMax
              Media company.
            </p>
            <p>This site is fan-made and not affiliated with Bethesda.</p>
          </div>
        </footer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
