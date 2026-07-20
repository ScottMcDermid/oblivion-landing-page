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
import ExploreIcon from '@mui/icons-material/Explore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GitHubIcon from '@mui/icons-material/GitHub';
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

            <Box className="flex flex-col items-center gap-4">
              <Box className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://spells.oblivion.tools"
                  className="w-44 rounded-xl px-6 py-2"
                >
                  <img src="/icons/spell-altar.png" alt="" width={24} height={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} /> Spell Altar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://enchanting.oblivion.tools"
                  className="w-44 rounded-xl px-6 py-2"
                >
                  <img src="/icons/enchanting.png" alt="" width={24} height={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} /> Enchanting
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://alchemy.oblivion.tools"
                  className="w-44 rounded-xl px-6 py-2"
                >
                  <img src="/icons/alchemy.png" alt="" width={24} height={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} /> Alchemy
                </Button>
              </Box>
              <Box className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://plan.oblivion.tools"
                  className="w-44 rounded-xl px-6 py-2"
                >
                  <img src="/icons/planner.png" alt="" width={24} height={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} /> Planner
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://damage.oblivion.tools"
                  className="w-44 rounded-xl px-6 py-2"
                >
                  <WhatshotIcon sx={{ marginRight: 1 }} /> Damage Calc
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://wayshrine.oblivion.tools"
                  className="w-44 rounded-xl px-6 py-2"
                >
                  <ExploreIcon sx={{ marginRight: 1 }} /> Wayshrine
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        <footer className="mt-16 w-full border-t border-gray-700 bg-neutral-900 px-6 py-8 text-sm text-gray-400">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div className="space-y-2">
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
            <a
              href="https://github.com/scottmcdermid/oblivion-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 self-center rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-300 transition hover:border-gray-400 hover:text-gray-100 sm:self-end"
            >
              <GitHubIcon fontSize="inherit" />
              GitHub
            </a>
          </div>
        </footer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
