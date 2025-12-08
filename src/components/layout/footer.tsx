"use client";

import type { ReactElement } from "react";
import {
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";
import {
  Twitter,
  Instagram,
  LinkedIn,
  Send,
} from "@mui/icons-material";

function Footer(): ReactElement {
  return (
    <Box
      component="footer"
      sx={{
        py: 10, // ~ py-20
        px: { xs: 4, md: 6 }, // px-4 md:px-6
        borderTop: "1px solid rgba(255,255,255,0.5)",
        backgroundColor: "rgba(6,6,6,0)", // transparent over your red bg
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "68rem", // max-w-5xl
          mx: "auto",
        }}
      >
        {/* Top columns */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "space-between" },
            gap: { xs: 4, md: 8 },
            mb: 4,
          }}
        >
          {/* ABOUT US */}
          <Box
            sx={{
              flexBasis: { xs: "50%", md: "auto" }, // 2 columns on mobile, auto on desktop
              flexShrink: 0,
            }}
          >
            <Typography
              component="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                color: "rgb(220,184,33)",
              }}
            >
              About us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                fontSize: "0.875rem",
                color: "rgba(249,250,251,0.65)",
              }}
            >
              <li>
                <Link
                  href="/team"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps?rlz=1C1GCEA_enMA1157MA1157&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIHCAEQLhiABDIGCAIQRRhAMgYIAxBFGDkyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyEwgHEC4YrwEYxwEYgAQYmAUYmQXSAQgxNjYzajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KSVSUD5UCTsTMWR_h4VL9kmF&daddr=Via+Francesco+Petrarca,+80,+80123+Napoli+NA,+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.napuleth.org/archive/2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Archive 2025
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.napuleth.org/archive/2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Archive 2024
                </Link>
              </li>
            </Box>
          </Box>

          {/* JOIN US */}
          <Box
            sx={{
              flexBasis: { xs: "50%", md: "auto" },
              flexShrink: 0,
            }}
          >
            <Typography
              component="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                color: "rgb(220,184,33)",
              }}
            >
              Join us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                fontSize: "0.875rem",
                color: "rgba(249,250,251,0.65)",
              }}
            >
              <li>
                <Link
                  href="https://docsend.com/view/zaw8ij7k9avkcg6z"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Sponsor us
                </Link>
              </li>
              <li>
                <Link
                  href="https://speak.ctrlshift.events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Join as a speaker
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/napulETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Text us
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/napulETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Volunteer
                </Link>
              </li>
            </Box>
          </Box>

          {/* FOLLOW US */}
          <Box
            sx={{
              flexBasis: { xs: "50%", md: "auto" },
              flexShrink: 0,
            }}
          >
            <Typography
              component="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                color: "rgb(220,184,33)",
              }}
            >
              Follow us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                fontSize: "0.875rem",
                color: "rgba(249,250,251,0.65)",
              }}
            >
              <li>
                <Link
                  href="https://x.com/napulETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <Twitter sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/napulETH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <Instagram sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/napul-eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/napuleth"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <Send sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Telegram
                </Link>
              </li>
            </Box>
          </Box>

          {/* DATE & LOCATION */}
          <Box
            sx={{
              flexBasis: { xs: "50%", md: "auto" },
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box>
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    color: "rgb(220,184,33)",
                  }}
                >
                  Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "rgba(249,250,251,0.65)",
                  }}
                >
                  8 - 14 June 2026
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    color: "rgb(220,184,33)",
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "rgba(249,250,251,0.65)",
                  }}
                >
                  Villa Doria D&apos;Angri, Via Francesco Petrarca,
                  <br />
                  80, 80123 Napoli NA
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop: "1px solid rgba(229,231,235,0.35)", // subtle line
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "rgba(249,250,251,0.6)",
          }}
        >
          <Typography sx={{ fontSize: "0.75rem" }}>
            © 2025 ctrl/shift. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
